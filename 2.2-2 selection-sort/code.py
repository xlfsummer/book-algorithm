def sort (A):
    n = len(A)
    for i in range(n - 1):
        key = A[i]
        minimum = i
        j = i + 1
        while j < n:
            if A[minimum] > A[j]:
                minimum = j
            j += 1
        A[i] = A[minimum]
        A[minimum] = key
