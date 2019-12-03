let talkingCalendar = function (date) {
    var newDate = ""
    var monthsArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var month = monthsArray[(date[5] + date[6]) - 1] + " ";
    var day = "";
    var year = date[0] + date[1] + date[2] + date[3];

    (function () {
        if ((date[8] === "0") && (date[9] === "1")) {
            day += "1st, ";
        } else if ((date[8] === "0") && (date[9] === "2")) {
            day += "2nd, ";
        } else if ((date[8] === "0") && (date[9] === "3")) {
            day += "3rd, ";
        } else if (date[8] === "0") {
            day += date[9] + "th, ";
        } else {
            day += date[8] + date[9] + "th, ";
        }
    })();

    newDate += month + day + year;
    return newDate;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));