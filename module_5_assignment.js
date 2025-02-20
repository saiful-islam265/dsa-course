// Task 1: K-Ostad
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

// Task 2: Encrypt-Decrypt
function encrypt(S) {
    let encrypted = "";
    let count = 1;

    for (let i = 0; i < S.length; i++) {
        if (S[i] === S[i + 1]) {
            count++;
        } else {
            encrypted += S[i] + count.toString();
            count = 1;
        }
    }

    return encrypted.split("").reverse().join("");
}

function decrypt(encrypted) {
    const intermediate = encrypted.split("").reverse().join("");

    let decrypted = "";
    let i = 0;

    while (i < intermediate.length) {
        const char = intermediate[i];
        i++;

        let count = "";
        while (i < intermediate.length && !isNaN(intermediate[i])) {
            count += intermediate[i];
            i++;
        }

        decrypted += char.repeat(Number(count));
    }

    return decrypted;
}

const S1 = "aaaaaaaaaaa";
const encrypted1 = encrypt(S1);
console.log("Encrypted:", encrypted1);
const decrypted1 = decrypt(encrypted1);
console.log("Decrypted:", decrypted1);

const S2 = "ostad";
const encrypted2 = encrypt(S2);
console.log("Encrypted:", encrypted2);
const decrypted2 = decrypt(encrypted2);
console.log("Decrypted:", decrypted2);