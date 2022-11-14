# Fourier Transform and its Applications

## Fourier Series

Any 1D function $f(x)$ in the interval $0\leq x < L$ can be written down as a series of sines and cosines:

$$ f(x) = \sum_{i=0}^\infty a_j \cos\left(\frac{2 \pi j x}{L}\right) + \sum_{j=0}^\infty b_j \sin\left( \frac{2 \pi j x}{L} \right) $$

given that all the coefficients $a_i$'s and $b_j$'s are known. Using the identities that relate the sines and cosines to exponential, it is possible to write the series using complex exponential:

$$ f(x) = \sum_{i=-\infty}^\infty c_j \exp \left( i \left[\frac{2 \pi j x}{L}\right] \right) $$

where the sum limit now goes from $-\infty$ to $\infty$. The coefficients $c_j$s can be obtained by using the orthogonality of the complex exponential 

$$\int_0^L e^{i \left[\frac{2 \pi j}{L}\right] x} e^{-i \left[\frac{2 \pi j'}{L}\right] x} dx = L \delta(j-j')$$

$$ c_j = \frac{1}{L} \int_{0}^L f(x) \exp \left( - i \left[ \frac{2 \pi j x}{L} \right] \right) $$

Therefore, we can represent the function $f(x)$ as the coefficients of Fourier series $\{ c_j \}$. Given one representation we can find the other and vice versa.

## Discrete fourier transform

In many practical applications, fourier transforms of discretely sampled data points is useful. Discrete fourier transform using complex exponentials can be derived making use of the geometric series:

$$ \sum_{j=0}^{N-1} a^j = \frac{1-a^N}{1-a} $$

If $a= e^{i(2\pi m)/N}$ (here we are using $m$ instead of $x$ and $N$ instead of $L$ as variables in the discrete case):

$$ \sum_{j=0}^{N-1} e^{i(2 \pi j m)/N} = \frac{1-e^{i(2\pi m)}}{1-e^{i(2\pi m)/N}} = \begin{cases} N {\qquad \rm if\ m\ is\ zero} \\ 0 \qquad \ else \end{cases} $$
