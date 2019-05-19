Show that if $f(n)$ and $g(n)$ are monotonically increasing functions, then so are the functions $f(n)+g(n)$ and $f(g(n))$, and if $f(n)$ and $g(n)$ are in addition nonnegative, then $f(n) \cdot g(n)$ is monotonically increasing.

设 $m \le n$

已知
- $m \le n \leftrightarrow f(m) \le f(n)$
- $m \le n \leftrightarrow g(m) \le g(n)$

1. $f(n) + g(n)$

$$
\begin{aligned}
&f(m) + g(m) \le f(n) + g(n)\\
\leftarrow
&f(m) \le f(n) \land g(m) \le g(n)\\
\leftrightarrow
&m \le n \land m \le n\\
\leftrightarrow
&T
\end{aligned}
$$

2. $f(g(n))$

$$
\begin{aligned}
&f(g(m)) \le f(g(n))\\
\leftrightarrow
&g(m) \le g(n)\\
\leftrightarrow
&m \le n\\
\leftrightarrow
&T
\end{aligned}
$$

3. $f(n) \cdot g(n)$

$$
\begin{aligned}
&f(m) \cdot g(m) \le f(n) \cdot g(n)\\
\leftrightarrow
&g(m)/g(n) \le f(n)/f(m)\\
\leftarrow
&g(m)/g(n) \le 1 \le f(n)/f(m)\\
\leftrightarrow
&g(m) \le g(n) \land f(m) \lt f(n)\\
\leftrightarrow
&m \le n \land m \le n\\
\leftrightarrow
&T
\end{aligned}
$$
