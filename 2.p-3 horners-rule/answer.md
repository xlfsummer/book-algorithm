a. $\Theta-notation$ for Horner's rule

$$\Theta(n)$$

b. see `code.js`

c. loop invriant

$$y=\sum^{n-(i+1)}_{k=0}{a_{k+i+1}x^k}$$

1. Initialization  
第一次循环开始前 $i=n, y=0$  
设 $y=\sum^{n-(i+1)}_{k=0}{a_{k+i+1}x^k}$  
带入 $i=n$  
$y=\sum^{1}_{k=0}{a_{k+n+1}x^k}=a_{n+1}+a_{n+2}x$  
$\because a_{n+1}=0, a_{n+2}=0$  
得 $y=0$  
假设符合要求

2. Mantenance  
每次循环开始时
设 $i=m$  
有 $y=\sum^{n-(m+1)}_{k=0}{a_{k+m+1}x^k}$    
当循环完成时 $y=a_{m}+x(\sum^{n-(m+1)}_{k=0}{a_{k+m+1}x^k})$  
$y=a_{m}+\sum^{n-(m+1)}_{k=0}{a_{k+m+1}x^{k+1}}$   
$y=\sum_{k=-1}^{-1}a_{k+m+1}x^{k+1}+\sum^{n-(m+1)}_{k=0}{a_{k+m+1}x^{k+1}}$  
$y=\sum^{n-(m+1)}_{k=-1}{a_{k+m+1}x^{k+1}}$  
替换变量 $j=k+1$  
$y=\sum^{n-(m+1)+1}_{j=0}{a_{m+j}x^{j}}$  
循环结束时 $i$ 自增 $1$, 即 $i=m-1$  
$\therefore y=\sum^{n-(i+2)+1}_{j=0}{a_{i+j+1}x^{j}}$  
替换变量名 $j = k$ 并化简  
$y=\sum^{n-(i+1)}_{k=0}={a_{k+i+1}x^{k}}$

3. Terminalization  
循环结束时 $$
