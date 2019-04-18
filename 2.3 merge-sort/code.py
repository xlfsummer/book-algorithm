def sort(A):
    mergeSort(A, 0, len(A))

def mergeSort(A, p, r):
    q = (p + r) // 2
    if q > p:
        mergeSort(A, p, q)
        mergeSort(A, q, r)
        merge(A, p, q, r)

def merge(A, p, q, r):
    L = []
    R = []
    for i in range(p, q): # p .. q-1
        L.append(A[i])
    L.append(float("inf"))
    for i in range(q, r): # q .. r-1
        R.append(A[i])
    R.append(float("inf"))
    iL = 0
    iR = 0
    for i in range(p, r):
        if L[iL] >= R[iR]:
            A[i] = R[iR]
            iR += 1
        else: #L[iL] <= R[iR]
            A[i] = L[iL]
            iL += 1

# A = [9, 21, 213, 32, 45, 8,7 , 3423, 78, 53, 4, 1, 3]
# sort(A)
# print(A)
