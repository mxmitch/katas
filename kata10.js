let calculateChange = function (total, cash) {
    var final = {};
    var change = cash - total;

    function insertDecimal(num) {
        change = (num / 100).toFixed(2);
    }

    insertDecimal(change);

    if (change / 20 >= 1) {
        final.twentyDollar = Math.floor(change / 20);
        change = change - 20 * final.twentyDollar;
    }
    if (change / 10 >= 1) {
        final.tenDollar = Math.floor(change / 10);
        change = change - 10 * final.tenDollar;
    }
    if (change / 5 >= 1) {
        final.fiveDollar = Math.floor(change / 5);
        change = change - 5 * final.fiveDollar;
    }
    if (change / 2 >= 1) {
        final.twoDollar = Math.floor(change / 2);
        change = change - 2 * final.twoDollar;
    }
    if (change / 1 >= 1) {
        final.oneDollar = Math.floor(change / 1);
        change = change - 1 * final.oneDollar;
    }
    if (change / 0.25 >= 1) {
        final.quarter = Math.floor(change / 0.25);
        change = change - 0.25 * final.quarter;
    }
    if (change / 0.10 >= 1) {
        final.dime = Math.floor(change / 0.10);
        change = change - 0.10 * final.dime;
    }
    if (change / 0.05 >= 1) {
        final.nickel = Math.floor(change / 0.05);
        change = change - 0.05 * final.nickel;
    }
    if (change / 0.01 >= 1) {
        final.penny = Math.round(change / 0.01);
    }
    return final;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));