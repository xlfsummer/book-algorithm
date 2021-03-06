a. $\Theta-notation$ for Horner's rule

$$\Theta(n)$$

b. see `code.js`

c. loop invriant

$$y=\sum^{n-(i+1)}_{k=0}{a_{k+i+1}x^k}$$

1. Initialization  
第一次循环开始前 $i=n, y=0$  
设 $\displaystyle y=\sum^{n-(i+1)}_{k=0}{a_{k+i+1}x^k}$  
带入 $i=n$  
$\displaystyle y=\sum^{1}_{k=0}{a_{k+n+1}x^k}=a_{n+1}+a_{n+2}x$  
$\because a_{n+1}=0, a_{n+2}=0$  
得 $y=0$  
假设符合要求

2. Mantenance  
每次循环开始时
设 $i=m$  
有 $\displaystyle y=\sum^{n-(m+1)}_{k=0}{a_{k+m+1}x^k}$    
当循环完成时 $\displaystyle y=a_{m}+x(\sum^{n-(m+1)}_{k=0}{a_{k+m+1}x^k})$  
$\displaystyle y=a_{m}+\sum^{n-(m+1)}_{k=0}{a_{k+m+1}x^{k+1}}$   
$\displaystyle y=\sum_{k=-1}^{-1}a_{k+m+1}x^{k+1}+\sum^{n-(m+1)}_{k=0}{a_{k+m+1}x^{k+1}}$  
$\displaystyle y=\sum^{n-(m+1)}_{k=-1}{a_{k+m+1}x^{k+1}}$  
替换变量 $j=k+1$  
$\displaystyle y=\sum^{n-(m+1)+1}_{j=0}{a_{m+j}x^{j}}$  
循环结束时 $i$ 自增 $1$, 即 $i=m-1$  
$\displaystyle \therefore y=\sum^{n-(i+2)+1}_{j=0}{a_{i+j+1}x^{j}}$  
替换变量名 $j = k$ 并化简  
$\displaystyle y=\sum^{n-(i+1)}_{k=0}={a_{k+i+1}x^{k}}$

3. Terminalization  
循环退出时 $i=-1$  
代入得 $\displaystyle y=\sum^{n-(-1+1)}_{k=0}{a_{k+-1+1}x^k}$  
$\displaystyle y=\sum^{n}_{k=0}{a_{k}x^k}$  
得证
