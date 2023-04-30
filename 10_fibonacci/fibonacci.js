const fibonacci = function(order) {
    if (order-1 < 0) { // for order < 0 return oops
        return 'OOPS'
    }
    else if (order === 1 || order === 2) { //for order = 0,1  return 1
        return 1;
    }
    else {
        const array = [1,1];
        for (let i=2; i<order; i++) {
           let sum= array[i-1] + array[i-2];
            array.push(sum);
        }
        return array[order-1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
