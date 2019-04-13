module.exports.sort = function sort(arr){
    let j = 1;
    for(; j < arr.length; j++){
        let key = arr[j];
        let i = j - 1;
        while(arr[i] > key && i >= 0){
            arr[i + 1] = arr[i];
            i--;
        }
        arr[i+1] = key;
    }
}
