Show that for any real constants $a$ and $b$, where $b>0$, $(n+a)^b=\Theta(n^b)$

$$
\begin{aligned}
    &(n+a)^b=\Theta(n^b)\\
    \leftrightarrow &\exist(c_1\in\mathbb{R}^+)\exist(c_2\in\mathbb{R}^+)\exist(n_0\in\mathbb{R}^+)\forall(n>n_0)(c_1n^b \le (n+a)^b \le c_2n^b))\\
    \leftrightarrow &\exist(c_1\in\mathbb{R}^+)\exist(c_2\in\mathbb{R}^+)\exist(n_0\in\mathbb{R}^+)\forall(n>n_0)(c_1 \le (\frac{n+a}{n})^b \le c_2))\\
    \leftarrow&\forall(n>|2a|)(2^{-b}\le(\frac{n+a}{n})^b\le2^b)\\
    \leftrightarrow&\forall(n>|2a|)(1/2\le\frac{n+a}{n}\le2) \land b>0\\
    \leftrightarrow&\forall(n>|2a|)(1/2\le1+\frac{a}{n}\le2)\\
    \leftrightarrow&\forall(n>|2a|)(-1/2\le\frac{a}{n}\le1)\\
    \leftrightarrow&\forall(n>|2a|)(-n/2 \le a\le n)\land n>0\\
    \leftrightarrow&\forall(n>|2a|)(n \ge -2a \land n \ge a)\\
    \leftrightarrow&\forall(n>|2a|)(n > |2a| \ge -2a \land n > |2a| > |a| \ge a)\\
    \leftrightarrow&T
\end{aligned}
$$

存在 $c_1=2^{-b}, c_2=2^b, n_0=|2a|$ 使得$\theta$-notaion定义式满足条件

得证
