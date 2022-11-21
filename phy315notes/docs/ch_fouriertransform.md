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

In many practical applications, fourier transforms of discretely sampled data points is useful. Discrete fourier transform of a set of n-data points $\{a_0, a_1, a_2, \dots, a_{n-1}\}$ is defined as:

$$ A_k = \sum_{m=0}^{n-1} a_m \exp{ \left\{ - 2 \pi i \left[ \frac{m k}{n} \right] \right\}} $$

Here $A_k$ are the fourier coefficients (n of them). From these fourier coefficients, we can get back the initial data points $a_m$s through an inverse discrete fourier transform:

$$ a_k = \frac{1}{n} \sum_{k=0}^{n-1} A_k \exp{ \left\{ 2 \pi i \left[ \frac{m k}{n} \right] \right\}} $$

It is possible to implement a direct version of this formula in python as python supports complex numbers. For instance the complex number $i$ is implemented in python using ```1j```.

However, as $n$ increases these direct implementations of DFT will take a long time to evaluate as the number of operations go as $\mathcal{O}(n^2)$. As such, a more clever algrithm called the fast fourier transform are implemented in software packages that calculate discrete fourier transform. For example, `numpy` has `numpy.fft` and `numpy.rfft` that are useful to calculate fourier transforms.