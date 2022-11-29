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

!!! note "Discrete Fourier Transform"

    $$ A_k = \sum_{m=0}^{n-1} a_m \exp{ \left\{ - 2 \pi i \left[ \frac{m k}{n} \right] \right\}} $$

Here $A_k$ are the fourier coefficients (n of them). From these fourier coefficients, we can get back the initial data points $a_m$s through an inverse discrete fourier transform:

!!! note "Inverse Discrete Fourier Transform"

    $$ a_m = \frac{1}{n} \sum_{k=0}^{n-1} A_k \exp{ \left\{ 2 \pi i \left[ \frac{m k}{n} \right] \right\}} $$

It is possible to implement a direct version of this formula in python as python supports complex numbers. For instance the complex number $i$ is implemented in python using ```1j```.

However, as $n$ increases these direct implementations of DFT will take a long time to evaluate as the number of operations go as $\mathcal{O}(n^2)$. As such, a more clever algrithm called the fast fourier transform are implemented in software packages that calculate discrete fourier transform. For example, `numpy` has `numpy.fft.fft` and `numpy.fft.rfft` functions that are useful to calculate fourier transforms.

!!! question "Time series sunspot data"

    Implement your own discrete fourier transform `dft` function and use it to fourier transform the [time series sunspot data](http://www-personal.umich.edu/~mejn/cp/data/sunspots.txt).

    To understand the result, notice that if our data is a time series as is the sunspot data (number of sunspots each month), then the fourier transform gives us a measure of the frequency.

    First, notice that when $k=0$, the fourier transform $A_0$ is just the average of the data points:

    $$ A_0 = \frac{1}{n} \sum_{m=0}^{n-1} a_m $$

    We can think of this as a wave with zero frequency. Second, when $k=1$, we start to get the coefficient of the Fourier wave decomposition with frequency $f_1 = \frac{1}{n \Delta t}$, and the frequency increases with increasing $k$. In general: 

    $$ f_k = \frac{k}{n \Delta t} $$

    In the sunspot data $\Delta t = 1\ {\rm month}$.

    By plotting the power spectrum $p_k = |A_k|^2 = A_k^* A_k$ of the Fourier coefficients, and finding out the $k$ at which it is maximum, it is possible to find the periodicity of the sunspot data using $T= 1/f$.

    

    

