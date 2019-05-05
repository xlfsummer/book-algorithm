function getNumberOfinversions(A){
    return mergeSort(A, 0, A.length);
}

function mergeSort(A, p, r){
    let inversion = 0;
    let q = Math.floor((p + r) / 2);
    if(p < q){
        inversion += mergeSort(A, p, q);
        inversion += mergeSort(A, q, r);
        inversion += merge(A, p, q, r);
    }
    return inversion;
}

function merge(A, p, q, r){
    let L = [];
    let R = [];

    for(let i = p; i < q; i++)
        L.push(A[i]);
    for(let i = q; i < r; i++)
        R.push(A[i])

    L.push(Infinity);
    R.push(Infinity);

    let iL = 0;
    let iR = 0;
    let inversion = 0;

    for(let i = p; i < r; i++){
        if(L[iL] > R[iR]){
            A[i] = R[iR];
            iR ++;
            if(L[iL] != Infinity)
                inversion += L.length - 1 - iL;
        }else{
            A[i] = L[iL];
            iL ++;
        }
    }
    return inversion;
}


let A = [4, 3, 2, 1];

// console.log("Number of inversions in [%s] is %d", A, getNumberOfinversions(A));
console.log(`The number of inversions in [${A}] is ${getNumberOfinversions(A)}.`);
