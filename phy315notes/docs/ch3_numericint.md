# Numerical Methods for Integration

Numerical integrations are commonplace in scientific modeling and simulations. If several integrations have to be calculated, not only accuracy and precision but the speed at which those can be obtained becomes important. We will attempt to understand all three concepts (accuracy, precision and the speed of calculation) in the context of some methods of numerical integrations given below.

Working with one dimensional integrals, our goal will be to approximate the definite integral:

$$ I(a, b) = \int_a^b f(x)\ dx. $$

## Trapezoid rule

In the trapezoid rule, the integral is approximated by adding the areas of many trapezoids. The interval $[a,b]$ is divided into $N$ sections so that the sum of the areas of the $N$ trapezoids provide an estimate for the integral $I(a,b)$.

$$ I (a,b) \approx \sum_{i=1}^{N} A_i $$

where the distance between the parallel sides of the $i$th trapezoid is $h = (b-a)/N$ and the area of the $i$th trapezoid is 

$$ A_i = \frac{1}{2} h \left[f(a+(i-1)h) + f(a+i h)\right] $$

### Estimation of Error

## Adaptive Integration

