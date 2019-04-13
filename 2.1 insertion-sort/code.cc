void sort(int arr[], int size){
    int j = 1;
    for(; j < size; j++){
        int key = arr[j];
        int i = j - 1;
        while(arr[i] > key && key >= 0){
            arr[i + 1] = arr[i];
            i--;
        }
        arr[i+1] = key;
    }
}
