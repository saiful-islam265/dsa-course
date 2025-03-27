//Task 1: Fast Search
function fastSearch(n, arr, k, queries) {  
    // Sort the array  
    arr.sort((a, b) => a - b);  

    const results = [];  
    
    const binarySearch = (target) => {  
        let left = 0, right = n;  
        while (left < right) {  
            const mid = Math.floor((left + right) / 2);  
            if (arr[mid] <= target) {  
                left = mid + 1;  
            } else {  
                right = mid;  
            }  
        }  
        return left;
    };  

    for (let i = 0; i < k; i++) {  
        const [l, r] = queries[i];  
        const rightIndex = binarySearch(r);
        const leftIndex = binarySearch(l - 1);
        results.push(rightIndex - leftIndex);  
    }  

    return results;  
}  

const n = 5;  
const arr = [10, 1, 10, 3, 4];  
const k = 4;  
const queries = [  
    [1, 10],  
    [2, 9],  
    [3, 4],  
    [2, 2]  
];  

console.log(fastSearch(n, arr, k, queries)); // Output: [5, 2, 2, 0]

//Task 2: Closest to the Left
function closestToLeft(n, arr, k, queries) {  
    const results = [];  

    const binarySearch = (target) => {  
        let left = 0, right = n;  
        while (left < right) {  
            const mid = Math.floor((left + right) / 2);  
            if (arr[mid] <= target) {  
                left = mid + 1;
            } else {  
                right = mid;
            }  
        }  
        return left - 1;
    };  

    for (let i = 0; i < k; i++) {  
        const target = queries[i];  
        const index = binarySearch(target);  
        results.push(index < 0 ? 0 : index + 1);
    }  

    return results;  
}  

const n2 = 5;  
const arr2 = [3, 3, 5, 8, 9];  
const k2 = 5;  
const queries2 = [2, 4, 8, 1, 10];  

console.log(closestToLeft(n2, arr2, k2, queries2));