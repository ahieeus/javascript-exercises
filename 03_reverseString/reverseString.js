const reverseString = function(str) {
    let reverStr = "";
    for (let i = str.length; i >= 0; i--) {
        reverStr += str.charAt(i);
    }
    return reverStr;
};

/*const reverseString = function(str) {
    return str.split("").reverse().join("");
}*/

// Do not edit below this line
module.exports = reverseString;
