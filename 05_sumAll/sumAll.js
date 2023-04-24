const sumAll = function(int1,int2) {
    var sum = 0;
    if (int1 >= 0 && int2 >=0 && typeof int1 === "number" && typeof int2 === "number") {
        if (int1 >= int2) {
            for (var i=int2; i <= int1; i++) {
                sum += i;
            }
            return sum;
        }
        if (int1 < int2) {
            for (var j=int1; j<=int2; j++) {
                sum += j;
            }
            return sum;
        }
    }
    else {
        return "ERROR" ;
    }
};

// Do not edit below this line
module.exports = sumAll;
