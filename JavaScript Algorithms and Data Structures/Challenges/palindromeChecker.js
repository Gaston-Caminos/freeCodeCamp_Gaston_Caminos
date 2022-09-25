function palindrome(str) {


    const arr = str.toLowerCase().replace(/[\W*_*]/g, "").split(""); // Convert to lowercase, then remove all non-alphanumeric characters, and split
    const m = (arr.length - 1) / 2; // Middle of the array

    for (let i = 0; i < m; i++) {
        if (arr[i] != arr[(arr.length-1)-i]) { // Compare each element
            return false;
        }
    }
    return true;
}
