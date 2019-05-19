>  **Stiring's formula**
>
> $$ n! = \sqrt{2 \pi n}(\frac{n}{e})^n \cdot e^{\frac{\theta_n}{12n}} \text{, for some } 0 <\theta_n<1 $$

$$
\begin{aligned}
\ln(x)^{\prime}
=&\lim_{\Delta x\rightarrow0}{\frac{\ln(x+\Delta x)-\ln(x)}{(x+\Delta x)-x}}\\
=&\lim_{\Delta x\rightarrow0}{\frac{\ln(x+\Delta x)-\ln(x)}{\Delta x}}\\
=&\lim_{\Delta x\rightarrow0}{\frac{\ln(\frac{x+\Delta x}{x})}{\Delta x}}\\
=&\lim_{\Delta x\rightarrow0}{\big(\ln(1+\frac{\Delta x}{x})\cdot\frac{1}{\Delta x}\big)}\\
=&\lim_{\Delta x\rightarrow0}{\big(\ln(1+\frac{\Delta x}{x})\cdot\frac{1}{x}\cdot\frac{x}{\Delta x}\big)}\\
=&\frac{1}{x}\cdot\lim_{\Delta x\rightarrow0}{\big(\ln(1+\frac{\Delta x}{x})\cdot\frac{x}{\Delta x}\big)}\\
=&\frac{1}{x}\cdot\lim_{\Delta x\rightarrow0}{\big(\ln((1+\frac{1}{\frac{x}{\Delta x}})^{\frac{x}{\Delta x}})\big)}\\
=&\frac{1}{x}\cdot\lim_{x \rightarrow \infin}{\big(\ln((1+\frac{1}{x})^x)\big)}\\
=&\frac{1}{x}\cdot\ln(e)\\
=&\frac{1}{x}

\end{aligned}
$$

多项式 $p(x)$ 是 $\ln(x)$ 在 $x=x_0$ 的泰勒级数, 则 $x=x_0$ 时 $p(x)$ 与 $\ln(x)$  $0...n$ 阶的导数相等

则

$$p(x)=\ln(x)$$

设

$$\tag{1} p(x)=\sum_{n=0}^{\infin}\frac{a_n}{n!}(x-x_0)^n$$

则有

$$ \forall(n\in\mathbb{N})\Big(p^{(n)}(x_0)=\ln^{(n)}(x_0)\Big) $$

求 $\ln(x)$ 在 $x=x_0$ 的导数：

$$
\begin{aligned}
\ln'(x_0)&=x_0^{-1}\\
\ln''(x_0)&=-x_0^{-2}\\
\ln'''(x_0)&=2!x_0^{-3}\\
&\ \vdots\\
\ln(x_0)^{(n)}&=

\begin{cases}
   ln(x_0) &\text{if } n=0 \\
   (-1^{n-1})(n-1)!(x_0^{-n}) &\text{if } n>0
\end{cases}

\end{aligned}
$$


求 $p(x)$ 在 $x=x_0$ 的导数：

$$ 
\begin{aligned}
p'(x_0)=a_1+a_2(x-x_0)+...&=a_1\\
p''(x_0)=a_2+a_3(x-x_0)+...&=a_2\\
&\ \vdots\\
p^{(n)}(x_0)&=a_n\\
\end{aligned}
$$

带入 $a_n=\begin{cases} ln(x_0) &\text{if } n=0 \\ (-1^{n-1})(n-1)!(x_0^{-n}) &\text{if } n>0 \end{cases}$ 到 $(1)$

$$
\begin{aligned}
p(x)&=\ln(x_0)+\sum_{n=1}^{\infin}\frac{(-1^{n-1})(n-1)!(x_0^{-n})}{n!}(x-x_0)^n\\

p(x)&=\ln(x_0)+\sum_{n=1}^{\infin}\frac{(-1^{n-1})(x_0^{-n})}{n}(x-x_0)^n

\end{aligned}
$$

计算 $p(1+x)$ 取 $x_0=1$

$$
\begin{aligned}
p(1+x)&=\ln(1)+\sum_{n=1}^{\infin}\frac{(-1^{n-1})(1^{-n})}{n}(1+x-1)^n\\

p(1+x)&=\sum_{n=1}^{\infin}\frac{-1^{n-1}}{n}x^n
\end{aligned}
$$

计算 $p(1-x)$ 取 $x_0=1$

$$
\begin{aligned}
p(1-x)&=\ln(1)+\sum_{n=1}^{\infin}\frac{(-1^{n-1})(1^{-n})}{n}(1-x-1)^n\\

p(1-x)&=\sum_{n=1}^{\infin}\frac{-1^{n-1}}{n}(-x)^n\\

p(1-x)&=\sum_{n=1}^{\infin}-\frac{1}{n}x^n
\end{aligned}
$$

则

$$
\begin{aligned}
&\ln(1+x)=p(1+x)=\sum_{n=1}^{\infin}\frac{-1^{n-1}}{n}x^n&&(x>-1)\\

&\ln(1-x)=p(1-x)=\sum_{n=1}^{\infin}-\frac{1}{n}x^n&&(x<1)
\end{aligned}
$$

则当 $-1<x<1$

$$
\ln(1+x)-\ln(1-x)=\sum_{n=1}^{\infin}\frac{-1^{n-1}}{n}x^n-\sum_{n=1}^{\infin}-\frac{1}{n}x^n\\

\ln\Big(\frac{1+x}{1-x}\Big)=\sum_{n=1}^{\infin}\frac{-1^{n-1}}{n}x^n+\sum_{n=1}^{\infin}\frac{1}{n}x^n\\

\ln\Big(\frac{1+x}{1-x}\Big)=\sum_{n=1}^{\infin}\Big(\frac{1-1^{n-1}}{n}x^n\Big)\\

$$

$$\tag{2} \ln\Big(\frac{1+x}{1-x}\Big)=2\sum_{n=1}^{\infin}\Big(\frac{1}{2n-1}x^{2n-1}\Big)$$

取 $x=\frac{1}{2m+1} ,\ m\in\mathbb{N}$

$$
\begin{aligned}
\frac{1+x}{1-x}
&=\frac{1+\frac{1}{2m+1}}{1-\frac{1}{2m+1}}\\
&=\frac{(2m+1)+1}{(2m+1)-1}
\\
&=\frac{m+1}{m}
\end{aligned}
$$

带入 $(2)$

$$
\begin{aligned}
\ln\Big(\frac{m+1}{m}\Big)
&=2\sum_{n=1}^{\infin}\Big(\frac{1}{2n-1}(\frac{1}{2m+1})^{2n-1}\Big)\\

\ln\Big(1+\frac{1}{m}\Big)
&=\frac{2}{2m+1}\sum_{n=1}^{\infin}\Big(\frac{1}{2n-1}(\frac{1}{2m+1})^{2n-2}\Big)\\

\Big(\frac{2m+1}{2}\Big)\ln\Big(1+\frac{1}{m}\Big)
&=\sum_{n=1}^{\infin}\Big(\frac{1}{2n-1}(\frac{1}{2m+1})^{2n-2}\Big)\\




\end{aligned}
$$

$$
\tag{3}

\Big(m+\frac{1}{2}\Big)\ln\Big(1+\frac{1}{m}\Big)
=\sum_{n=1}^{\infin}\Big(\frac{1}{2n-1}(\frac{1}{2m+1})^{2n-2}\Big)
$$

因为

$$
\forall{n\in\mathbb{Z^+}}\forall{m\in\mathbb{N}}\Big(\frac{1}{2n-1}(\frac{1}{2m+1})^{2n-2}>0\Big)
$$

并且当 $n=1$ 时

$$
\frac{1}{2n-1}(\frac{1}{2m+1})^{2n-2}=1
$$

所以有

$$ \tag{4} \sum_{n=1}^{\infin}\Big(\frac{1}{2n-1}(\frac{1}{2m+1})^{2n-2}\Big) >1 $$

又因为

$$
\begin{aligned}
&\sum_{n=1}^{\infin}\Big(\frac{1}{2n-1}(\frac{1}{2m+1})^{2n-2}\Big)\\

=&1+\sum_{n=2}^{\infin}\Big(\frac{1}{2n-1}(\frac{1}{2m+1})^{2n-2}\Big)\\

<&1+\sum_{n=2}^{\infin}\Big(\frac{1}{3}(\frac{1}{2m+1})^{2n-2}\Big)\\

=&1+\frac{1}{3}\sum_{n=2}^{\infin}\Big(\frac{1}{2m+1}\Big)^{2n-2}\\

\end{aligned}
$$

$$
\tag{5}

1+\frac{1}{3}\sum_{n=1}^{\infin}\Big(\frac{1}{2m+1}\Big)^{2n}
$$

设 $a = \sum_{n=1}^{\infin}(\frac{1}{2m+1})^{2n}$

$$
\begin{aligned}

    a&=(\frac{1}{2m+1})^2+(\frac{1}{2m+1})^4+...+(\frac{1}{2m+1})^{2n}+...\\
    
    a(\frac{1}{2m+1})^2&=(\frac{1}{2m+1})^4+(\frac{1}{2m+1})^6+...+(\frac{1}{2m+1})^{2n}+...\\

    &\because \lim_{n\rightarrow\infin}{(\frac{1}{2m+1})^n=0}\\

    a(1-(\frac{1}{2m+1})^2)&=(\frac{1}{2m+1})^2\\

    a&=\frac{(\frac{1}{2m+1})^2}{(1-(\frac{1}{2m+1})^2)}\\

      a&=\frac{(\frac{1}{2m+1})^2}{(1-\frac{1}{2m+1})(1+\frac{1}{2m+1})}\\

      a&=\frac{\frac{1}{(2m+1)(2m+1)}}{\frac{2m}{2m+1}\cdot\frac{2m+2}{2m+1}}\\

      a&=\frac{\frac{1}{(2m+1)(2m+1)}}{\frac{(2m)(2m+2)}{(2m+1)(2m+1)}}\\

      a&=\frac{1}{2m(2m+2)}\\

      a&=\frac{1}{4m(m+1)}\\
\end{aligned}
$$

代入 $(5)$

$$
    1+\frac{1}{3}\sum_{n=1}^{\infin}\Big(\frac{1}{2m+1}\Big)^{2n}
    =1+\frac{a}{3}
    =1+\frac{1}{12m(m+1)}
$$

$\because (4)(5)$

$$
1<\sum_{n=1}^{\infin}\Big(\frac{1}{2n-1}(\frac{1}{2m+1})^{2n-2}\Big)<1+\frac{1}{12m(m+1)}
$$

$\because (3)$

$$
1<\Big(m+\frac{1}{2}\Big)\ln\Big(1+\frac{1}{m}\Big)<1+\frac{1}{12m(m+1)}
$$

$$
\tag{6}
e < (1+\frac{1}{m})^{m+\frac{1}{2}} < e^{1+\frac{1}{12m(m+1)}}
$$

设

$$
a_n=\frac{n!e^n}{n^{n+\frac{1}{2}}}
$$

则

$$
\begin{aligned}
\frac{a_n}{a_{n+1}}
&=\frac{\frac{n!e^n}{n^{n+\frac{1}{2}}}}{\frac{(n+1)!e^{n+1}}{(n+1)^{n+\frac{3}{2}}}}\\

&=\frac{n!e^n}{n^{n+\frac{1}{2}}}\cdot\frac{(n+1)^{n+\frac{3}{2}}}{(n+1)!e^{n+1}}\\

&=\frac{1}{n^{n+\frac{1}{2}}}\cdot\frac{(n+1)^{n+\frac{3}{2}}}{(n+1)e}\\

&=\frac{1}{n^{n+\frac{1}{2}}}\cdot\frac{(n+1)^{n+\frac{1}{2}}}{e}\\

&=\frac{1}{e}\cdot(\frac{n+1}{n})^{n+\frac{1}{2}}\\

&=\frac{1}{e}\cdot(1+\frac{1}{n})^{n+\frac{1}{2}}\\

\end{aligned}
$$

$$\frac{a_ne}{a_{n+1}}=(1+\frac{1}{n})^{n+\frac{1}{2}} $$


因为 $(6)$

$$
e < \frac{a_ne}{a_{n+1}} < e^{1+\frac{1}{12n(n+1)}}\\
\vphantom{}\\
1 < \frac{a_n}{a_{n+1}} < e^{\frac{1}{12n(n+1)}}\\
a_{n+1} < a_n < a_{n+1}e^{\frac{1}{12n(n+1)}}
$$

$$
a_n < a_{n+1}e^{\frac{1}{12}\cdot\frac{1}{n(n+1)}}\\

a_n < a_{n+1}e^{\frac{1}{12}\cdot(\frac{1}{n}-\frac{1}{n+1})}\\

a_n < a_{n+1}\frac{e^{\frac{1}{12}\cdot\frac{1}{n}}}{e^{\frac{1}{12}\cdot\frac{1}{n+1}}}\\

a_ne^{-\frac{1}{12n}} < a_{n+1}e^{-\frac{1}{12(n+1)}}\\
$$
