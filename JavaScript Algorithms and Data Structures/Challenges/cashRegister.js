const checkCashRegister = (price, cash, cid) => {

    let res = {
        "status": "INSUFFICIENT_FUNDS",
        "change": []
    };

    let coins = {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.1,
        "QUARTER": 0.25,
        "ONE": 1,
        "FIVE": 5,
        "TEN": 10,
        "TWENTY": 20,
        "ONE HUNDRED": 100
    };

    /** Rounds a number to the specified decimal places */
    const roundDecimals = (number, decimals) => Number(number.toFixed(decimals));

    /** Chooses the corresponding coin to give the change */
    const chooseCoin = () => {
        let index; // Undefined index
        for (let i = 0; i < len; i++) { // Iterate the array 
            if (cid[i][1] > 0 && coins[cid[i][0]] <= change) { 
                // If the amount of the actual coin I'm observing is greater than or equal to the change, then I'll give the change in that coin
                // conditions in the "if" statement: if the amount in drawer is greater than or equal to the change AND I can give the change in that coin, I'll take it

                index = i; // Index of the coin
            }
        }
        if (index === undefined && res["change"].length == 0) {
            return index;
        }

        return index;
    }

    /** Gives the change with the coin selected in "chooseCoin" */
    const giveChange = (index) => {
        let c = 0; // Counter: it counts how many times I give the change
        while (cid[index][1] > 0 && change > 0 && coins[cid[index][0]] <= change) { // While I have enough coins, the change to give is still positive and the value of the chosen coin is less than the change, I keep subtracting
            change = roundDecimals(change - coins[cid[index][0]], 2) // Give change
            cid[index][1] = roundDecimals(cid[index][1] - coins[cid[index][0]], 2) // Take money from the drawer
            console.log(cid[index][1]);
            c++;
        }

        changeArr.push([cid[index][0], c * coins[cid[index][0]]]) // Pushes an array with the used coin and the amount e.g. ["PENNY", 2.01]
    }

    let change = roundDecimals(cash - price, 2);
    let changeArr = []; // Array I'll return at the end with the change 
    const len = cid.length;
    const totalCid = roundDecimals(cid.reduce((a, b) => a + b[1], 0), 2); // Gets the total cash in drawer to know if it is enough

    if (totalCid < change) { // If the cash in drawer is not enough to give change
        return res;
    } else if (totalCid == change) { // If the cash in drawer is equal to the change due
        res["status"] = "CLOSED";
        res["change"] = cid;
        return res;
    } else {
        while (change > 0) {
            let idx;
            idx = chooseCoin();
            if (idx === undefined ) {
                break;
            } else {
                giveChange(idx);
            }     
        }
        if (change > 0) {
            res["status"] = "INSUFFICIENT_FUNDS";
            res["change"] = [];
            return res;
        }    
    }
    
    res["status"] = "OPEN";
    res["change"] = changeArr;
    return res;  
}