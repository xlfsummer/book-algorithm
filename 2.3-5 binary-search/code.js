function search(value, A){
    return binarySearch(value, A, 0, A.length);
}

function binarySearch(value, A, start, end){
    // console.log(...arguments);

    let mid = Math.floor((start + end)/2);
    let midValue = A[mid];
    // console.log("midvalue: ", midValue);
    
    if (start == mid){
        if (A[start] == value)
            return start;
        else
            return null;
    }

    else if (midValue > value){
        return binarySearch(value, A, start, mid);
    }
    else {
        return binarySearch(value, A, mid, end);
    }
}

// let A = [1, 4, 6, 12, 13, 56, 31, 43, 59, 61, 142, 742, 2351, 3213]
// let result = search(12, A);
// console.log("result: ", result);

module.exports = search;
