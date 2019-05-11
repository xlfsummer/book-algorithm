Prove that the running time of an algorithm is $\Theta(g(n))$ if and only if its worst-cast running time is $O(g(n))$ and its best case runing time is $\Omega(g(n))$.

设:
最好情况的时间为 $T_{best}(n)$,
最坏情况的时间为 $T_{worst}(n)$
设算法所有可能的时间集合 $U$, 有 

$$ \exists (n_0 \in \mathbb{R}^+) \forall(n>n_0) \forall (T(n) \in U)(T_{best}(n) \le T(n) \le T_{worst}(n))$$

则将题意翻译为表达式为：

$$ \forall (T(n) \in U)(T(n) \in \Theta(g(n))) \leftrightarrow T_{worst}(n) \in O(g(n)) \land T_{best}(n) \in \Omega(g(n))$$

$$ \because T_{worst}(n) \in O(g(n)) \leftrightarrow  \forall (T(n) \in U)(T(n) \in O(g(n)))$$
$$ \because T_{best}(n) \in \Omega(g(n)) \leftrightarrow  \forall (T(n) \in U)(T(n) \in \Omega(g(n)))$$

$$ \forall (T(n) \in U)(T(n) \in \Theta(g(n))\leftrightarrow T(n) \in O(g(n)) \land T(n) \in \Omega(g(n)))$$

$$ \because f(n)=\Theta(g(n)) \leftrightarrow f(n)=O(g(n)) \land f(n)=\Omega(g(n))$$

$$ \forall (T(n) \in U)(T(n) \in \Theta(g(n))\leftrightarrow T(n) \in \Theta(g(n)))$$

$$T$$
