exports.min = function min(array) {
    return typeof array === "undefined" || array.length === 0
        ? 0
        : Math.min(...array);
};

exports.max = function max(array) {
    return typeof array === "undefined" || array.length === 0
        ? 0
        : Math.max(...array);
};

exports.avg = function avg(array) {
    return typeof array === "undefined" || array.length === 0
        ? 0
        : array.reduce((a, b) => a + b, 0) / array.length;
};
