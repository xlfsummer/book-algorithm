#include "stdio.h"

void printArray(int A[], int length){
    for(int i = 0; i < length; i ++){
        printf("%d", A[i]);
        if(i != length - 1){
            printf(",");
        }
    }
    printf("\n");
}
