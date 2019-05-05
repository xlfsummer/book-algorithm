1. list the five inversions of  the array `[2, 3, 8, 6, 1]`
    - `[2, 1], [3, 1], [8, 1], [6, 1], [8, 6]`
2. What array with elements from the set $\{ 1, 2, \cdots, n \}$ has the most inversions? How many does it have?
    - `[n, n-1, ..., 2, 1]`
    - $\displaystyle\sum_{i=0}^{n-1}{i}=n(n-1)/2$
3. What is the relationship between the running time of insertion sort and the number of invertions in the input array?

    在插入排序中，每进行一次交换操作，数组的 invertions 就减少 1。所以 invertions 的数量与插入排序中交换次数的数量相等。交换操作是插入排序中次数数量级最高的操作。它们在 $\Theta-\text{notaion}$ 下都表示为 $\Theta(n^2)$。
4. Give an algorithm that determines the number of invertions in any permutation on $n$ elements in $\Theta(n\lg{n})$ worst-case time.

    [code.js](./code.js)
