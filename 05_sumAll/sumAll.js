const sumAll = function(int1,int2) {
    var sum = 0;
    if (int1 >= 0 && int2 >=0) {
        if (int1 >= int2) {
            for (var i=int2; i <= int1; i++) {
                sum += i;
            }
            return sum;
        }
        if (int2 > int1) {
            for (var j=int1; i<=int2; i++) {
                sum +=i;
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
