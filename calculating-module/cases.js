const factorial = n => {
    let mult = 1;
    for(let i = 1; i <= n; i++) mult *= i;
    return mult;
}

const permutation = (n,r) => factorial(n) / factorial(n-r);
const combination = (n,r) => factorial(n) / (factorial(n-r) * factorial(r));
const multiPermutation = (n,r) => n**r;
const multiCombination = (n,r) => combination(n+r-1,r);

module.exports = {
    permutation,
    combination,
    multiPermutation,
    multiCombination,
};

