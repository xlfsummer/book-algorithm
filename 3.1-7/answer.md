prove  $o(g(n)) \cap \omega(f(n))=\empty$

$o(g(n))=\{f(n)|\forall(c \in \mathbb{R}^+) \exists(n_0 \in \mathbb{R}^+) \forall(n > n_0) (0 \le f(n)< cg(n))\}$

$\omega(g(n))=\{f(n)|\forall(c \in \mathbb{R}^+) \exists(n_0 \in \mathbb{R}^+) \forall(n > n_0) (0 \le cg(n) < f(n))\}$

$$
\begin{aligned}
&o(g(n)) \cap \omega(f(n))\\
=&\{f(n)|
    \forall(c_1 \in \mathbb{R}^+)
    \forall(c_2 \in \mathbb{R}^+)
    \exists(n_1 \in \mathbb{R}^+)
    \exists(n_2 \in \mathbb{R}^+)
    \forall(n > n_1)
    \forall(n > n_2)
    (0 \le f(n)< c_1g(n) \land 0 \le c_2g(n) < f(n))\}\\
=&\{f(n)|
    \forall(c_1 \in \mathbb{R}^+)
    \forall(c_2 \in \mathbb{R}^+)
    \exists(n_1 \in \mathbb{R}^+)
    \exists(n_2 \in \mathbb{R}^+)
    \forall(n > max(n_1, n_2))
    (0 \le f(n)< c_1g(n) \land 0 \le c_2g(n) < f(n))\}\\
=&\{f(n)|
    \forall(c_1 \in \mathbb{R}^+)
    \forall(c_2 \in \mathbb{R}^+)
    \exists(n_0 \in \mathbb{R}^+)
    \forall(n > n_0))
    (0 \le f(n)< c_1g(n) \land 0 \le c_2g(n) < f(n))\}\\
=&\{f(n)|
    \forall(c_1 \in \mathbb{R}^+)
    \forall(c_2 \in \mathbb{R}^+)
    \exists(n_0 \in \mathbb{R}^+)
    \forall(n > n_0))
    (0 \le c_2g(n) < f(n)< c_1g(n))\}\\
=&\{f(n)|
    \forall(c_1 \in \mathbb{R}^+)
    \forall(c_2 \in \mathbb{R}^+)
    \exists(n_0 \in \mathbb{R}^+)
    \forall(n > n_0))
    (0 \le c_2 < \frac{f(n)}{g(n)} < c_1)\}\\
\sube&\{f(n)|
    \exists(n_0 \in \mathbb{R}^+)
    \forall(n > n_0))
    (0 \le 2 < \frac{f(n)}{g(n)} < 1)\}\\
=&\{f(n)|F\}\\
=&\empty
\end{aligned}
$$
