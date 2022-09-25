const convertToRoman = (num) => {
    // Object with the equivalent of roman numbers
    let romans = {
            units: {
                0: "",
                1: "I",
                2: "II",
                3: "III",
                4: "IV",
                5: "V",
                6: "VI",
                7: "VII",
                8: "VIII",
                9: "IX"
            },
            tens: {
                0: "",
                1: "X",
                2: "XX",
                3: "XXX",
                4: "XL",
                5: "L",
                6: "LX",
                7: "LXX",
                8: "LXXX",
                9: "XC"
            },
            hundreds: {
                "0": "",
                1: "C",
                2: "CC",
                3: "CCC",
                4: "CD",
                5: "D",
                6: "DC",
                7: "DCC",
                8: "DCCC",
                9: "CM"
            },
            thousands: {
                1: "M",
                2: "MM",
                3: "MMM",
            }
    };
    let number = String(num).split(""); // Separate the given number into an array of numbers after converting to a string: xxxx -> [x, x, x, x]
    console.log(number);
    let result = ["", "", "", ""]; // Array that will be replaced with the given number
    const len = number.length // Number of digits of the given number
    for (let i = len-1; i >= 0; i--) {
        switch (i) {
            case len-1:
                result[i] = romans.units[parseInt(number[i])]; // Convert the unit in Arabig to Roman
                break;
            case len-2:
                result[i] = romans.tens[parseInt(number[i])]; // Convert the tens in Arabig to Roman
                break;
            case len-3:
                result[i] = romans.hundreds[parseInt(number[i])]; // Convert the hundreds in Arabig to Roman
                break;
            case len-4:
                result[i] = romans.thousands[parseInt(number[i])]; // Convert the thousands in Arabig to Roman
                break;
        }
    }

    return result.join(""); // Join the array to return a string
}
