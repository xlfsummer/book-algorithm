let mergeSort = require("../2.3 merge-sort/code")
let binarySearch = require("../2.3-5 binary-search/code")

function findSum(S, x){
    mergeSort(S) // n lg n
    for (let i = 0; i < S.length; i ++){ 
        let result = binarySearch(x - S[i], S); // n * lg n
        if(result) return true;
    }
    return false;
}


let result = findSum([4,2,5,1,63,24,64,13,90,42,46,12,32,61,94,36,7], 100);
console.log(result);
