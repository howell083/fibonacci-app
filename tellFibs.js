//produce Nth digits of fibonacci sequence
 function tellFibs (num) {
    if (num == 1) {
        return [0];
    } else {
        let digits = [ 0, 1 ];
        for(let i = 2; i < num; i++){
            let temp = digits[i-2] + digits[i-1];
            digits.push(temp);
        }
        return digits;
    }
}

module.exports = { tellFibs }