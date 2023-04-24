const leapYears = function(input) {
    if ( input % 400 === 0) {
        return true;
    }//divid by 400
    else if (input % 4 === 0 && input % 100 !== 0) {
        return true;
    }//divid by 4 but couldn't be divided by 100
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
