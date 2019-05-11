Is $2^{n+1}=O(2^n)$?Is $2^{2n}=O(2^n)$?

1.

$$
\begin{aligned}
&2^{n+1}=O(2^n)\\
\leftrightarrow & \exists(c_1 \in \mathbb{R}^+)\exists(c_2 \in \mathbb{R}^+)\exists(n_0 \in \mathbb{R}^+)\forall(n>n_0)(c_1 \cdot 2^n < 2^{n+1} < c_2 \cdot 2^n)\\
\leftarrow &\forall(n>1)(1 \cdot 2^n < 2^{n+1} < 4 \cdot 2^n)\\
\leftrightarrow &\forall(n>1)(2^n < 2^{n+1} < 2^{n+2})\\
\leftrightarrow &T
\end{aligned}
$$

2.

$$
\begin{aligned}
&2^{2n}=O(2^n)\\
\leftrightarrow & \exists(c_1 \in \mathbb{R}^+)\exists(c_2 \in \mathbb{R}^+)\exists(n_0 \in \mathbb{R}^+)\forall(n>n_0)(c_1 \cdot 2^n < 2^{2n} < c_2 \cdot 2^n)\\
\leftrightarrow & \exists(c_1 \in \mathbb{R}^+)\exists(c_2 \in \mathbb{R}^+)\exists(n_0 \in \mathbb{R}^+)\forall(n>n_0)(c_1 \cdot 2^n < 2^n\cdot 2^n < c_2 \cdot 2^n)\\
\leftrightarrow & \exists(c_1 \in \mathbb{R}^+)\exists(c_2 \in \mathbb{R}^+)\exists(n_0 \in \mathbb{R}^+)\forall(n>n_0)(c_1 < 2^n < c_2)\\
\leftrightarrow &F

\end{aligned}
$$
