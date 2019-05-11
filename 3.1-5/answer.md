Prove Theorem 3.1

> ### Theorem 3.1
> For any two functions $f(n)$ and $g(n)$, we have $f(n)=\Theta(g(n))$ if and only if $f(n)=O(g(n))$ and $f(n)=\Omega(g(n))$

$$
\begin{aligned}
\big(&f(n)=\Theta(g(n)) \leftrightarrow f(n)=O(g(n)) \land f(n)=\Omega(g(n))\big)\\

\leftrightarrow & \bigg(\exist(c_1\in \mathbb{R}^+)\exist(c_2\in \mathbb{R}^+)\exist(n_0\in \mathbb{R}^+) \forall(n>n_0) \big(0 \le c_1g(n) \le f(n) \le c_2g(n)\big) \\
    &\begin{aligned}
    &\leftrightarrow&&
    \Big(\exist(c_3\in \mathbb{R}^+)\exist(n_1\in \mathbb{R}^+) \forall(n>n_1)\big(0\le c_3g(n) \le f(n)\big)\Big)\\ 
    &&&\land \Big(\exist(c_4\in \mathbb{R}^+)\exist(n_2\in \mathbb{R}^+) \forall(n>n_2)\big(0 \le f(n) \le c_4g(n)\big)\Big)
    \end{aligned}\\
    &\bigg)\\

\leftrightarrow & \bigg(\\
    &
    \exist(c_1\in \mathbb{R}^+)
    \exist(c_2\in \mathbb{R}^+)
    \exist(c_3\in \mathbb{R}^+)
    \exist(c_4\in \mathbb{R}^+)\\
    &\exist(n_0\in \mathbb{R}^+)
    \exist(n_1\in \mathbb{R}^+)
    \exist(n_2\in \mathbb{R}^+)\\
    &\forall(m_0 > n_0)
    \forall(m_1 > n_1)
    \forall(m_2 > n_2)\\
    &((0 \le c_1g(m_0) \le f(m_0) \le c_2g(m_0)) \leftrightarrow ((0 \le c_3g(m_1) \le f(m_1)) \land (0 \le f(m_2) \le c_4g(m_2))) \\
    &\bigg)\\

\leftarrow & \bigg(\\
    &\exist(c_1\in \mathbb{R}^+)
    \exist(c_2\in \mathbb{R}^+)
    \exist(c_3\in \mathbb{R}^+)
    \exist(c_4\in \mathbb{R}^+)\\
    &\exist(n_0\in \mathbb{R}^+)
    \exist(n_1\in \mathbb{R}^+)
    \exist(n_2\in \mathbb{R}^+)\\
    &\forall(m > max(n_0, n_1, n_2))\\
    & (b_1=min(c_1, c_3) \land (b_2=max(c_2,c_4))) \land \\
    &((0 \le b_1g(m) \le f(m) \le b_2g(m)) \leftrightarrow ((0 \le b_1g(m) \le f(m)) \land (0 \le f(m) \le b_2g(m))) \\
    &\bigg)\\

\leftrightarrow & \bigg(\\
    &\exist(c_1\in \mathbb{R}^+)
    \exist(c_2\in \mathbb{R}^+)
    \exist(c_3\in \mathbb{R}^+)
    \exist(c_4\in \mathbb{R}^+)\\
    &\exist(n_0\in \mathbb{R}^+)
    \exist(n_1\in \mathbb{R}^+)
    \exist(n_2\in \mathbb{R}^+)\\
    &\forall(m > max(n_0, n_1, n_2))\\
    &T\\
    &\bigg)\\
\leftrightarrow T

\end{aligned}
$$
