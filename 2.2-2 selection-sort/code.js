/**
 * **loop invariant**
 * 
 * these instruction described using pseudo code defined in the book
 * 
 * 1. Initialization:  
 *    `i = 0`  
 *    the subarry `A[1..i]` is `[]`  
 *    `A[1..i]` is orderd and each item in `A[1..i]`
 *    is little than any rest item in the array.
 * 
 * 2. Maintenance:  
 *    in each loop we find the minium item in `A[i..n]`, replace it and `A[i]`,
 *    so `A[i]` became the minium item in `A[i..n]` and the maximum item in
 *    `A[1..i]`, hence the subarray `A[1..i]` is ordered
 * 
 * 3. Termination:  
 *   when terminated  
 *   `i = n -1`
 *   becasuse the subarray `A[1..i]` is ordered and  
 *   each item in subarray `A[1..i]` is little than `A[n]`
 *   hence the entier array is sorted
 * 
 * 
 * **runing-time**
 * 
 * * best-case
 *  $$ T(n) $$
 */
module.exports = function sort( /** @type {number[]} */ A){
    let n = A.length;
    for(let i = 0; i < n - 1; i++){
        let key = A[i];
        let minimun = i;
        let j = i + 1;
        while(j < n){
            if(A[minimun] > A[j])
                minimun = j;
            j++;
        }
        A[i] = A[minimun];
        A[minimun] = key;
    }
}
