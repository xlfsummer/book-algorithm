module.exports = function sort(A){
    for(let i = 0; i < A.length; i++){
        for(let j = A.length; j > i; j--){
            if(A[j] < A[j - 1]){
                let key = A[j];
                A[j] = A[j - 1];
                A[j - 1] = key;
            }
        }
    }
}

// let A = [9, 5, 23, 10, 53, 1, 45, 31, 831, 957]
// sort(A)
// console.log(A);
