# Numerical Methods for Integration

Numerical integrations are commonplace in scientific modeling and simulations. If several integrations have to be calculated, not only accuracy and precision but the speed at which those can be obtained becomes important. We will attempt to understand all three concepts (accuracy, precision and the speed of calculation) in the context of some methods of numerical integrations given below.

Working with one dimensional integrals, our goal will be to approximate the definite integral:

$$ I(a, b) = \int_a^b f(x)\ dx. $$

## Trapezoid rule

In the trapezoid rule, the integral is approximated by adding the areas of many trapezoids. The interval $[a,b]$ is divided into $N$ sections so that the sum of the areas of the $N$ trapezoids provide an estimate for the integral $I(a,b)$.

$$ I (a,b) \approx \sum_{i=1}^{N} A_i $$

where the distance between the parallel sides of the $i$th trapezoid is $h = (b-a)/N$ and the area of the $i$th trapezoid is 

$$ A_i = \frac{1}{2} h \left[f(a+(i-1)h) + f(a+i h)\right] $$

Each area evaluation $A_i$ requires 2 function $f(x)$ evaluations; so, it appears as if the total cost of the integral estimate is $2N$ evaluations. However, it should be clear that some function evaluations are used twice as two adjacent trapezoids share a side. Therefore, it is better to write the formula in the following form:

$$ \begin{align}I(a,b) &\approx \sum_{i=1}^N \frac{h}{2}\left[f(a+(i-1)h) + f(a+i h)\right] \\
                       &=\frac{h}{2} \left[ f(a) + 2 f(a+h) + 2 f(a+2h) + \dots + f(b) \right]  \\
                       &=\frac{h}{2}\left[f(a)+f(b)\right] + h \sum_{i=1}^{N-1} f(a+ih)
\end{align}$$

### Estimation of Error

The leading order error on is given by the *Euler-Maclaurin formula* for the trapezoidal rule:

$$ \epsilon = \frac{1}{12} h^2 \left[ f'(a)-f'(b)\right].$$

Proofs can be found in textbooks; for example see Chapter 5 of Computational Physics by mark Newman for a proof. 

The use of the formula given above for the leading order error requires that we have the knowledge of the first derivative of the function. In the case that we have reliable estimates of $f'(a)$ and $f'(b)$, we can choose $N$ and therefore $h$ such that we get the desired leading order error $\epsilon$. 

## Adaptive Integration

