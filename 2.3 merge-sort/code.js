function sort(A){
    mergeSort(A, 0, A.length)
}

function mergeSort(A, p, r){
    let q = Math.floor((p + r) / 2);
    if(p < q){
        mergeSort(A, p, q);
        mergeSort(A, q, r);
        merge(A, p, q, r);
    }
}

function merge(A, p, q, r){
    let L = [];
    let R = [];

    for(let i = p; i < q; i ++)
        L.push(A[i]);
    for(let i = q; i < r; i++)
        R.push(A[i])

    L.push(Infinity)
    R.push(Infinity)

    let iL = 0;
    let iR = 0;

    for(let i = p; i < r; i++){
        if(L[iL] >= R[iR]){
            A[i] = R[iR]
            iR++;
        }
        else{
            A[i] = L[iL];
            iL++;
        }
    }

}

module.exports = sort;

// let A = [9, 21, 213, 32, 45, 8,7 , 3423, 78, 53, 4, 1, 3]
// sort(A)
// console.log(A);
