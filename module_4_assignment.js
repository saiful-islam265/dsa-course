// Task 1: Pascal's Triangle
function generatePascalTriangle(numRows) {
    const triangle = [[1]];
    
    for (let i = 1; i < numRows; i++) {
        const prevRow = triangle[i - 1];
        const currentRow = [1];
        
        for (let j = 1; j < i; j++) {
            currentRow.push(prevRow[j - 1] + prevRow[j]);
        }
        currentRow.push(1);
        triangle.push(currentRow);
    }
    
    return triangle;
}
console.log(generatePascalTriangle(5));

// Task 2: Maximum Gap
function maximumGap(nums) {
    if (nums.length < 2) {
        return 0;
    }
    
    const minVal = Math.min(...nums);
    const maxVal = Math.max(...nums);
    const n = nums.length;
    
    if (minVal === maxVal) {
        return 0;
    }
    
    const bucketSize = Math.max(1, Math.floor((maxVal - minVal) / (n - 1)));
    const buckets = Array.from(
        { length: Math.floor((maxVal - minVal) / bucketSize) + 1 },
        () => []
    );
    
    for (const num of nums) {
        if (num === maxVal) {
            const bucketIdx = buckets.length - 1;
            buckets[bucketIdx].push(num);
        } else {
            const bucketIdx = Math.floor((num - minVal) / bucketSize);
            buckets[bucketIdx].push(num);
        }
    }
    
    let maxGap = 0;
    let prevMax = buckets[0].length ? Math.min(...buckets[0]) : maxVal;
    
    for (const bucket of buckets) {
        if (bucket.length === 0) continue;
        
        const currMin = Math.min(...bucket);
        const currMax = Math.max(...bucket);
        maxGap = Math.max(maxGap, currMin - prevMax);
        prevMax = currMax;
    }
    
    return maxGap;
}

console.log(maximumGap([10]));
