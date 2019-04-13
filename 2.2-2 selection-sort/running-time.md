```py
def sort (A):                       
    n = len(A)                      # 1     1
    for i in range(n - 1):          # 2     n
        key = A[i]                  # 3     n - 1
        minimum = i                 # 4     n - 1
        j = i + 1                   # 5     n - 1
        while j < n:                # 6     \sum_{i=0}^{n} i
            if A[minimum] > A[j]:   # 7     \sum_{i=0}^{n-1} i
                minimum = j         # 8     \sum_{i=0}^{n-1} (i-t_i)
            j += 1                  # 9     \sum_{i=0}^{n-1} i
        A[i] = A[minimum]           # 10    n - 1
        A[minimum] = key            # 11    n - 1
```

$$
\begin{aligned}
T(n) = &c_1 + c_2n + c_3(n-1) + c_4(n-1)
    + c_5(n-1) \\
    &+ c_6\sum_{i=0}^{n} i
     + c_7\sum_{i=0}^{n-1} i
     + c_8\sum_{i=0}^{n-1} t_i 
     + c_9\sum_{i=0}^{n-1} i \\
    &+ c_{10}(n-1)
     + c_{11}(n-1)
\end{aligned}
$$

# best-case

it is the best case when the origin array is aleady ordered

$$t_i = 0$$

then

$$

\begin{alignedat}{2}

&T(n)& = &c_1 + c_2n + c_3(n-1) + c_4(n-1) + c_5(n-1) \\
    &&& + c_6\sum_{i=1}^{n} i
        + c_7\sum_{i=i}^{n-1} i
        + c_9\sum_{i=1}^{n-1} i\\
    &&& + c_{10}(n-1)
        + c_{11}(n-1) \\
    && = &c_1+c_2n+c_3(n-1)+c4(n-1)+c_5(n-1)\\
    &&& + c_6\frac{n(n+1)} 2+c_7\frac{n(n-1)} 2 + c_9\frac{n(n-1)} 2 \\
    &&& + c_{10}(n-1)
        + c_{11}(n-1) \\
    && = &an^2+bn+c
\end{alignedat}
$$

## Θ-notation

$$\Theta(n^2)$$

# worst-case

it is the worst case when the origin array is ordered
reverse, it has to assign (n-i) times to find minimun item in loop i

$$t_i = n-i$$

then

$$
\begin{alignedat}{2}

&&&\because\sum_{i=1}^{n-1} (n-i) = \sum_{i=1}^{n-1} i
\\
&T(n)&=& c_1 + c_2n + c_3(n-1) + c_4(n-1)
    + c_5(n-1) \\
    &&&+ c_6\sum_{i=1}^n i
    + c_7\sum_{i=1}^{n-1} i
    + c_8\sum_{i=1}^{n-1} i
    + c_9\sum_{i=1}^{n-1} i \\
    &&& + c_{10}(n-1) + c_{11}(n-1)\\
    && = &an^2+bn+c
\end{alignedat}
$$

## Θ-notation

$$\Theta(n^2)$$
