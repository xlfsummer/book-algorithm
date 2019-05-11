We can extend our notation to the casr of two parameters $n$ and $m$ that can go to infinity independently at different rates. Fot a given function $g(n,m)$, we denote by $O(g(n,m))$ the set of functions:

$$
O(g(n,m))=\{f(n,m)|
\exists (c\in\mathbb R^+)
\exists (n_0\in\mathbb R^+)
\exists (m_0\in\mathbb R^+)
\forall (n>n_0)
\forall (m>m_0)
(0 \le f(n,m) \le cg(n,m))
\}
$$

Give corresponding definitions for $\Omega(g(n,m))$ and $\Theta(g(n,m))$.

$$
\Omega(g(n,m))=\{f(n,m)|
\exists (c\in\mathbb R^+)
\exists (n_0\in\mathbb R^+)
\exists (m_0\in\mathbb R^+)
\forall (n>n_0)
\forall (m>m_0)
(0 \le cg(n,m) \le f(n,m))
\}
$$

$$
\Theta(g(n,m))=\{f(n,m)|
\exists (c_1\in\mathbb R^+)
\exists (c_2\in\mathbb R^+)
\exists (n_0\in\mathbb R^+)
\exists (m_0\in\mathbb R^+)
\forall (n>n_0)
\forall (m>m_0)
(0 \le c_1g(n,m) \le f(n,m) \le c_2g(n,m))
\}
$$
