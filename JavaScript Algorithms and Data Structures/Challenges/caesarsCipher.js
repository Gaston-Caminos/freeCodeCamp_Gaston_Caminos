/*const rot13 = (str) => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let newStr = [...str]; // Array with the given string
    const  len = newStr.length; // Length of the string
    for (let i = 0; i < len; i++) {
        newStr[i] = alphabet.indexOf(newStr[i]-13);
    }
}*/

/************************************** */
const rot13 = (str) => {
    let newStr = ""; // New string I'll be constructing 
    let len = str.length; // Length of the given string

    const shiftLetter = (letter, shift) => { // Shifts the letter the desired places
        letter = letter.toUpperCase();
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let newIndex = (alphabet.indexOf(letter) + shift) % (alphabet.length);
        return alphabet.includes(letter) ? alphabet[newIndex] : letter; 
    }

    for (let i = 0; i < str.length; i++) {
    newStr += shiftLetter(str[i], 13);
    }
    
    return newStr;
}