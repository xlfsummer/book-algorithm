/**
 * 
 * @param {number[]} A 
 */
function sort(A){
    mergeSort(A, 0, A.length);
}

/**
 * 
 * @param {number[]} A 
 * @param {number} p 
 * @param {number} r 
 */
function mergeSort(A, p, r){
    let q = Math.floor((p + r) / 2);
    if(q > p){
        mergeSort(A, p, q);
        mergeSort(A, q, r);
        merge(A, p, q, r);
    }
}


/**
 * 
 * @param {number[]} A 
 * @param {number} p 
 * @param {number} q
 * @param {number} r 
 */
function merge(A, p, q, r){
    let L = [];
    let R = [];
    for (let i = p; i < q ; i++) {
        L.push(A[i]);
    }
    for (let i = q; i < r ; i++) {
        R.push(A[i]);
    }
    let iL = iR = 0;
    for(let i = p; i < r; i ++){
        if (iL >= L.length) {
            for(let j = iR; j < R.length; j++){
                A[i + j - iR] = R[j];
            }
            break;
        }
        if (iR >= R.length) {
            for(let j = iL; j < L.length; j++){
                A[i + j - iL] = L[j];
            }
            break;
        }
        if (R[iR] > L[iL]){
            A[i] = L[iL]
            iL ++;
        } else {
            A[i] = R[iR];
            iR ++;
        }
    }
}

let A = [94, 4, 23, 12, 3, 43, 651, 12, 6, 9, 1];
sort(A);
console.log(A);
