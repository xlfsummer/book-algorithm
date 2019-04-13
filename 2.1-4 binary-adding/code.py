def binaryAdd(A, B):
    n = len(A)
    C = []
    carriedBit = 0
    i = 0
    
    for i in range(n):
        bitA = A[i]
        bitB = B[i]
        sum = bitA + bitB + carriedBit
        bitC = sum % 2
        carriedBit = sum // 2
        C.append(bitC)
    
    C.append(carriedBit)
    return C
