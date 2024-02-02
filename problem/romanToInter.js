/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function (s) {
    let output = 0
    let strS = String(s); 
    let obj = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    };
    //change the s to a string .list all the roman inside it
    for (let i = 0; i < strS.length; i++) { //get each element in the string
        if (obj[strS[i]] < obj[strS[i + 1]] && obj[strS[i] + strS[i + 1]]) {
            output += obj[strS[i] + strS[i + 1]]
            i++
        } //get the value of each roman. add them together.
        else { output += obj[strS[i]] }
    }

    return output
};
console.log(romanToInt("III"))