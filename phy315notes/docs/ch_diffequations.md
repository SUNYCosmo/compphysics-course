# Differential Equations

In physics, we encounter many differential equations -- Newton's second law in introductory mechanics and Schrodinger's equation in modern physics being some examples. Only a small subset of differential equations can be solved analytically and therefore numerical methods are important in solving many problems that require one to solve differential equations which do not have known alaytic solutions.

## Euler's method

A simple method to estimate a numerical solution $x(t)$ to the differential equation 

$$\frac{dx}{dt} = f(x,t)$$ 

can be devised by Taylor expanding $x(t+h)$ about $t$.

$$ x(t+h) = x(t) + h \frac{dx}{dt} + \frac{h^2}{2} \frac{d^2 x}{dt^2} + \dots $$

where $h$ is a small time step near $t$. 

!!! note "Taylor expansion"

    Recall the formula for Taylor expansion of $g(y)$ about $y=y_0$.

    $$ g(y) = g(y_0) + g'(y_0) (y-y_0) + \frac{g''(y_0)}{2!} (y-y_0)^2 + \dots$$

For small $h$, we may estimate $x(t+h)$ given that we know $x(t)$ by truncating the above Taylor series as:

$$ x(t+h) \approx x(t) + h f(x,t) $$

The approximate error we make is $\frac{1}{2}h^2 \frac{d^2x}{dt^2}$, which is the largest term that we ignore from the Taylor series expansion of $x(t+h)$. The error per step is therefore $\mathcal{O}(h^2)$. If we were to use Euler's method to find a numerical solution for $x(t)$ from $t=a$ to $t=b$ in steps of $h$, then we can define and estimate the cumulative error as:

$$ \sum_{k=0}^{N-1} \frac{1}{2} h^2 \left( \frac{d^2 x}{dt^2} \right)_{t=a+kh} = \frac{h}{2} \sum_{k=0}^{N-1} h \left( \frac{df}{dt}\right)_{t=a+k h} $$

The sum can be approximated by an integral from small $h$ to obtain 

$$ \frac{1}{2} h \int_a^b \frac{df}{dt} dt = \frac{h}{2} \left[ f(x(b), b) - f(x(a), a) \right] $$

That is the cumulative error is $O(h)$ and not $O(h^2)$.