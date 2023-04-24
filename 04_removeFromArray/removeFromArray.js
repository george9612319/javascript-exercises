const removeFromArray = function(array, ...manyMoreArgs) {
    Array=array.filter(item => !manyMoreArgs.includes(item)) ;
    return Array;
};

// Do not edit below this line
module.exports = removeFromArray;
