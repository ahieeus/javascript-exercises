const sumAll = function(num1, num2) {
    if (typeof(num1) != typeof(num2)) return "ERROR";
    else {
        if ((num1 * num2 < 0) || (Math.floor(num1) * Math.floor(num2) != num1 * num2)) return "ERROR";
        else return (Math.abs(num1 - num2) +1) * (num1 + num2) / 2;
    }
};

// Do not edit below this line
module.exports = sumAll;
