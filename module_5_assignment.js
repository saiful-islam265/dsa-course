function areK_Ostad(str1, str2, k) {
    const lengthDiff = Math.abs(str1.length - str2.length);
    if (lengthDiff > k) {
        return "No";
    }

    const count1 = {};
    const count2 = {};

    for (const char of str1) {
        count1[char] = (count1[char] || 0) + 1;
    }

    for (const char of str2) {
        count2[char] = (count2[char] || 0) + 1;
    }

    let operations = 0;

    for (const char in count1) {
        if (count1[char] !== (count2[char] || 0)) {
            operations += Math.abs(count1[char] - (count2[char] || 0));
        }
    }

    for (const char in count2) {
        if (!count1[char]) {
            operations += count2[char];
        }
    }

    const swapSavings = Math.floor(operations / 2);
    operations -= swapSavings;
    return operations <= k ? "Yes" : "No";
}


const str1 = "anagram";
const str2 = "grammar";
const k1 = 3;
console.log(areK_Ostad(str1, str2, k1));


const str3 = "ostad";
const str4 = "boss";
const k2 = 1;
console.log(areK_Ostad(str3, str4, k2));