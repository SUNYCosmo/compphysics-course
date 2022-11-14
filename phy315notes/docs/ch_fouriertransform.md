# Fourier Transform and its Applications

## Fourier Series

Any 1D function $f(x)$ in the interval $0\leq x < L$ can be written down as a series of sines and cosines:

$$ f(x) = \sum_{i=0}^\infty a_j \cos\left(\frac{2 \pi j x}{L}\right) + \sum_{j=0}^\infty b_j \sin\left( \frac{2 \pi j x}{L} \right) $$

given that all the coefficients $a_i$'s and $b_j$'s are known. Using the identities that relate the sines and cosines to exponential, it is possible to write the series using complex exponential:

$$ f(x) = \sum_{i=0}^\infty c_j \exp \left( i \left[\frac{2 \pi j x}{L}\right] \right) $$

The coefficients can be obtained by using the orthogonality of the complex exponential 

$$\int_0^L e^{i j x} e^{-i j' x} dx = L \delta(j-j')$$

$$ c_j = \frac{1}{L} \int_{0}^L f(x) \exp \left( - i \left[ \frac{2 \pi j x}{L} \right] \right) $$

Therefore, we can represent the function $f(x)$ as the coefficients of Fourier series $\{ c_j \}$. Given one representation we can find the other and vice versa.

## Discrete fourier transform

