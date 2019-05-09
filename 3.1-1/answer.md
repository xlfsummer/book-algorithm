Let $f(n)$ and $g(n)$ be asymptotically nonegative functions. Using the basic definition of $\Theta$-notation, prove that $max(f(n), g(n))=\Theta(f(n)+g(n))$

要证

$$max(f(n), g(n))=\Theta(f(n)+g(n))$$

只需证

$$\exists(c_1\in\mathbb{N})\exists(c_2\in\mathbb{N})\exists(n_0\in\mathbb{N})\forall(n>n_0)\\(c_1(f(n)+g(n))<max(f(n), g(n))<c_2(f(n)+g(n)))$$

令 $c_1=1/3,c_2=1$

只需证

$$\exists(n_0\in\mathbb{N})\forall(n>n_0)\\((f(n)+g(n))/3<max(f(n), g(n))<f(n)+g(n))$$

只需证

$$\exists(n_0\in\mathbb{N})\forall(n>n_0)\\((f(n)+g(n))/3<max(f(n), g(n))\wedge(max(f(n), g(n))<f(n)+g(n))$$
$$\because f(n)>0, g(n)>0$$
$$\therefore max(f(n), g(n))<f(n)+g(n)$$

只需证

$$\exists(n_0\in\mathbb{N})\forall(n>n_0)\\((f(n)+g(n))/3<max(f(n), g(n)))$$

$$\because\forall{n}((f(n)<g(n)) \vee (f(n)=g(n)) \vee (f(n)>g(n)))=T$$

分三种情况讨论:

当 $f(n)<g(n)$

$$max(f(n),g(n))=g(n)$$
$$f(n)+g(n)<g(n)+g(n)<2g(n)$$
$$\because(2g(n))/3<g(n)$$
$$\therefore(f(n)+g(n))/3<(2g(n))/3<g(n)$$
$$\therefore(f(n)+g(n))/3<max(f(n),g(n))$$

当 $f(n)=g(n)$

$$max(f(n),g(n))=g(n)$$
$$f(n)+g(n)=2g(n)$$
$$\because(2g(n))/3<g(n)$$
$$\therefore(f(n)+g(n))/3<max(f(n),g(n))$$

当 $f(n)>g(n)$

$$max(f(n),g(n))=f(n)$$
$$f(n)+g(n)<2f(n)$$
$$\because(2f(n))/3<f(n)$$
$$\therefore(f(n)+g(n))/3<(2f(n))/3<f(n)$$
$$\therefore(f(n)+g(n))/3<max(f(n),g(n))$$

所以

$$\forall{n}(f(n)+g(n))/3<max(f(n),g(n))$$
