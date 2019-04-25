def sort(A):
    mergeSort(A, 0, len(A))

def mergeSort(A, p, r):
    q = ( p + r ) // 2
    if p < q:
        mergeSort(A, p, q)
        mergeSort(A, q, r)
        merge(A, p, q, r)

def merge(A, p, q, r):
    L = []
    R = []
    for i in range(p, q):
        L.append(A[i])
    for i in range(q, r):
        R.append(A[i])
    iL = 0
    iR = 0
    for i in range(p, r):
        if iL >= len(L):
            for j in range(iR, len(R)):
                A[i + j - iR] = R[j]
            break
        if iR >= len(R):
            for j in range(iL, len(L)):
                A[i + j - iL] = L[j]
            break
        if L[iL] > R[iR]:
            A[i] = R[iR]
            iR += 1
        else:
            A[i] = L[iL]
            iL += 1


A = [4, 3, 7, 10, 4, 34, 11, 2, 45, 62, 93, 25]
sort(A)
print(A)
