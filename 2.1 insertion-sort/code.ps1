
function insertionSort($arr){
    [int]$j = 2
    for(; $j -lt $arr.Length; $j++){
        $key = $arr[$j];
        $i = $j - 1;
        while (($arr[$i] -gt $key) -and ($i -ge 0)) {
            $arr[$i + 1] = $arr[$i];
            $i --
        }
        $arr[$i + 1] = $key;
    }
}



$arr = 41, 59, 26, 41, 58;
Write-Host "origin: $arr";
insertionSort($arr);
Write-Host "sorted: $arr";
