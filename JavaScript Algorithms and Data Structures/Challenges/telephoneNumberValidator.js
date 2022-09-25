/*const tel = (num) => {
    let regex = /^1?([\s-(])*?\d{3}([)\s-])*?\d{3}([\s-])?\d{4}$/; // If the country code is provided, it must be 1, after it, the number must have 10 numbers
    return regex.test(num);                                 // Spaces are optional 
}*/ // This one doesn't return the desired in two cases

const tel = (num) => {
    let regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/; // If the country code is provided, it must be 1, after it, the number must have 10 numbers
    return regex.test(num);                                 // Spaces are optional 
}
