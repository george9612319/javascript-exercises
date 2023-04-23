const repeatString = function(string,number) {
    var repeatString = '';
    if (number < 0) {
        return 'ERROR' ;
    }

    else {
        for (var i=0; i < number; i++) {
            repeatString += string;
            }
            return repeatString;
        }
};

// Do not edit below this line
module.exports = repeatString;
