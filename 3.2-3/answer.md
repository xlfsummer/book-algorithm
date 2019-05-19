Prove equation $\lg(n!)=\Theta(n \ln n)$. Also prove that $n!=\omega(2^n)$ and $n!=o(n^n)$.

1. $\lg(n!)=\Theta(n \ln n)$

$$
\begin{aligned}
& \lg(n!)=\Theta(n \ln n)\\
\leftrightarrow &
\exist(c_1 \in \mathbb R^+)
\exist(c_2 \in \mathbb R^+)
\exist(n_0 \in \mathbb R^+)
\forall(n > n_0)
(c_1n \ln n \le \lg(n!) \le c_2n \ln n )\\

\leftrightarrow &
\exist(c_1 \in \mathbb R^+)
\exist(c_2 \in \mathbb R^+)
\exist(n_0 \in \mathbb R^+)
\forall(n > n_0)
(c_1 \le \frac{\lg(n!)}{n \ln n} \le c_2)\\

\leftrightarrow &
\exist(c_1 \in \mathbb R^+)
\exist(c_2 \in \mathbb R^+)
\exist(n_0 \in \mathbb R^+)
\forall(n > n_0)
(c_1 \le \frac{\lg(n!)/\lg(e) \cdot \lg(e)}{n \ln n} \le c_2)\\

\leftrightarrow &
\exist(c_1 \in \mathbb R^+)
\exist(c_2 \in \mathbb R^+)
\exist(n_0 \in \mathbb R^+)
\forall(n > n_0)
(\frac{c_1}{\lg e} \le \frac{\ln(n!)}{n \ln n} \le \frac{c_2}{\lg e})\\

\leftrightarrow &
\exist(c_1 \in \mathbb R^+)
\exist(c_2 \in \mathbb R^+)
\exist(n_0 \in \mathbb R^+)
\forall(n > n_0)
(\frac{c_1}{\lg e} \le \frac{\ln1 + \ln2 + ... + \ln n }{n \ln n} \le \frac{c_2}{\lg e})\\

\leftrightarrow &
\exist(c_1 \in \mathbb R^+)
\exist(c_2 \in \mathbb R^+)
\exist(n_0 \in \mathbb R^+)
\forall(n > n_0)
(\frac{c_1}{\lg e} \le \frac{\ln 1}{n \ln n} + \frac{\ln 2}{n \ln n} + ... + \frac{\ln n}{n \ln n}= \frac{\ln1 + \ln2 + ... + \ln n }{n \ln n} \  \le \frac{n \ln n}{n \ln n} \le \frac{c_2}{\lg e})\\


\end{aligned}
$$
<!-- \lg(n!)=\lg1+\lg2+...+\lg{n} \le n \lg{n}\\
\because n \lg{n} = \Theta(n \ln n)\\
\therefore \lg(n!) = \Theta(n \ln n) -->

2. $n!=\omega(2^n)$
