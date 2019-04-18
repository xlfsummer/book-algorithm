function sort(A){
    divideConquer(A, 0, A.length)
}

function divideConquer(A, p, r){
    let q = Math.floor((p + r) / 2);
    if(p < q){
        divideConquer(A, p, q);
        divideConquer(A, q, r);
        return merge(A, p, q, r);
    }
}

function merge(A, p, q, r){
    let L = [...A.slice(p, q), Infinity];
    let R = [...A.slice(q, r), Infinity];

    for(let i = p; i < r; i++){
        A[i] = L[0] >= R[0]
             ? R.shift()
             : L.shift()
    }
}

let A = new Array(100).fill(0).map(()=>Math.random());
sort(A)
console.log(A);
