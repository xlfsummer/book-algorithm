def sort(arr):
    j = 1
    for j in range(len(arr)):
        key = arr[j]
        i = j - 1
        while arr[i] < key and i >= 0:
            arr[i + 1] = arr[i]
            i -= 1
        arr[i + 1] = key
