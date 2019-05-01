/**
 * @param {number[]} A vector of coefficients
 * @param {number} x 
 * 
 * @description
 * 
 * - running time `n^2`
 */
function polynomial(A, x){
    let sum = 0;
    for(let i = 0; i < A.length; i++){
        let pox = 1;
        for(let j = 0; j < i; j ++){
            pox = x * pox
        }
        sum += A[i] * pox
    }
    return sum;
}
