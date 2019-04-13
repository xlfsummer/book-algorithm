function binaryAdd(A, B){
    let n = A.length;
    let C = [];
    let carriedBit = 0;
    let i = 0;

    // Assume the binary bits are stored in an array starting with the least important bit
    // ending with the most important bit.
    for(; i < n; i++){
        let bitA = A[i];
        let bitB = B[i];
        let sum = bitA + bitB + carriedBit;
        let bitC = sum % 2;
        carriedBit = Math.floor(sum / 2);
        C[i] = bitC;
    }
    
    C[i] = carriedBit;
    return C;
}
