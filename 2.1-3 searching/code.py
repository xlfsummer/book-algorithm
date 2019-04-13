def search(v, arr):
    index = None
    for i in range(len(arr)):
        if arr[i] == v:
            index = i
    return index

# loop invariant
# these instruction described using pseudo code defined in the book

# 1. Initialization:
#    i = 0
#    subarray `A[1..i]` is `[]`
#    `[]` contains nothing, so `index` remain `Nil`
#    `index` is the result of searching value `v` in subarray `A[1..i]`

# 2. Maintenance:
#    test `A[i]`
#    if `A[i]` equals `v`, assign `index` with `i`
#    if `A[i]` does not equals `v`, `index` remains `Nil`
#    `index` is the result of searching value `v` in subarray `A[1..i]`

# 3. Termination:
#    finally, `i = A.length`
#    `index` is the result of searching value `v` in subarray `A[1..A.length]`
#    `A[1..A.length]` is entire array
#    `index` is the result of searching value `v` in `A`
#    hence the algorithm is correct
