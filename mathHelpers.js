
function square(n) {
    if (typeof n !== "number" || isNaN(n)) {
        return "Invalid input";
    }
    return n * n;
}

function cube(n) {
    if (typeof n !== "number" || isNaN(n)) {
        return "Invalid input";
    }
    return n * n * n;
}

function sqrt(n) {
    if (typeof n !== "number" || isNaN(n)) {
        return "Invalid input";
    }
    if (n < 0) {
        return "Error: Cannot take square root of a negative number";
    }
    return Math.sqrt(n);
}

module.exports = {
    square,
    cube,
    sqrt
};
