# Numerical Methods for Differentiation

First, let us look into some methods for calculating numerical derivatives.

## Finite Differences

Numerical derivatives of a function $f(x)$ at $x=x_0$ can be calculated by the method of finite differences. Recall that the derivative $f'(x_0)$ tells you about the slope of the tangent at $x=x_0$. Such a slope can be drawn by drawing a line by considering two nearby points on either side of $P(x_0, f(x_0))$: $P_-(x_0-h, f(x_0-h))$ and $P_+(x_0+h, f(x_0+h))$ where $h$ is small. Therefore, the estimate for the slope and therefore the derivative $f'(x_0)$ becomes:

$$f'(x_0) = \frac{f(x_0+h)-f(x_0-h)}{x_0+h-(x_0-h)}=\frac{f(x_0+h)-f(x_0-h)}{2 h}$$

You should convince yourself that as $h\rightarrow 0$, your estimate approaches the exact derivative.

### Sample code and accuracy check

=== "Python code for central difference"
    ``` py title="central difference derivative"
    def central_diff_sin(x, h):
        """Calculate numerical derivative of sin(x) using central difference

        Parameters
        ----------
        x : real
            angle in radians
        h : real
            step size in radians
        """
        import numpy as np
        return (np.sin(x+h)-np.sin(x-h))/(2*h)
    ```

=== "Accuracy check"
    | x | h | `central_diff_sin(x,h)` | `cos(x)` (actual) | percent accuracy |
    | - | - | ----------------------- | ----------------- | ---------------- |
    | 0.3 | 0.04 | 0.9550818 | 0.9553365 | 0.026660 |
    | 0.3 | 0.03 | 0.9551932 | 0.9553365 | 0.014999 |
    | 0.3 | 0.02 | 0.9552728 | 0.9553365 | 0.006667 |
    | 0.3 | 0.01 | 0.9553206 | 0.9553365 | 0.001663 |

<div id="canvas-holder">

</div>

<script src="centraldiff.js">

</script>

---

### Estimating accuracy

In the example above, we knew the correct value of the operation that we were numerically calculating since $\frac{d\sin(x)}{dx} = \cos x$. However, the actual value of the numerical methods lies when calculating quantities that do not have an easy analytic solution. In such cases, it is useful to be able to have some knowledge of the error in the numerical estimate. 

We can estimate the error made when numerically calculating derivatives using the central difference method by using Taylor expansion. 

=== "Leading order error for central difference"

    The leading order approximation error is given by 
    
    $$\epsilon = \frac{|h^2 f'''(x_0)|}{6}$$
    
    The expression shows that the approximation error $\epsilon$ decreases as $h$ decreases. For our example above with $f(x)=\sin(x)$, $x_0=0.3$ and $h=0.01$:
    
    $$\epsilon = \frac{|(0.01)^2 (\cos{0.1})|}{6} = 0.00001658 = 0.001658\% $$
    
    which is close to the actual percent accuracy calculated earlier. 

    For functions in which $f'''(x_0)$ cannot be evaluated, the information that $\epsilon$ scales as $h^2$ is still very useful. 

=== "Proof using Taylor expansion"

    $$ f(x_0+h) = f(x_0) + h f'(x_0)+ \frac{h^2 f''(x_0)}{2} + \frac{h^3 f'''(x_0)}{6} + \dots $$
    
    $$ f(x_0-h) = f(x_0) - h f'(x_0)+ \frac{h^2 f''(x_0)}{2} - \frac{h^3 f'''(x_0)}{6} + \dots$$
    
    we obtain,
    
    $$  \frac{f(x_0+h)-f(x_0-h)}{2h} = f'(x_0) + \frac{h^2 f'''(x_0)}{6} + \dots $$

    which is sometimes written as:

    $$ f'(x_0) \approx \frac{f(x_0+h)-f(x_0-h)}{2h} + \mathcal{O}(h^2) $$

    where $\mathcal{O}(h^2)$ indicates that the leading order contribution error made by estimation is proportional to $h^2$.
!!! question "Forward difference numerical derivative"

    Work out a forward difference approach (i.e. use the slope of line made by $P_+$ and $P$) to taking numerical derivative and compare it with the central difference method discussed above in terms of accuracy.

!!! question "Sampled function"

    Suppose you have a sampled function i.e. the function values are known (let's say at a regular interval of $h$). Which one is a better approach -- central difference or forward difference for calculating numerical derivatives?

## A finite difference estimate of second derivative

A straight-forward apporach to calculate the second derivative at a point, $f''(x_0)$ is to simply use the finite difference derivative (say central difference) on the first derivative:

$$f''(x_0) \approx \frac{f'(x_0+h)-f'(x_0-h)}{2 h}$$

However, as we can see in the above formula, each $f''(x_0)$ evaluation requires two evaluations of first derivatives, and if we use central difference method each derivative requires two more evaluations of the function $f(x)$. 

Another approach is to make use of the Taylor expansions of $f(x_0+h)$ and $f(x_0-h)$ to obtain a finite difference estimate of the second derivative $f''(x_0)$ as follows:

$$ f(x_0+h) = f(x_0) + h f'(x_0)+ \frac{h^2 f''(x_0)}{2} + \frac{h^3 f'''(x_0)}{6} + \dots $$
    
$$ f(x_0-h) = f(x_0) - h f'(x_0)+ \frac{h^2 f''(x_0)}{2} - \frac{h^3 f'''(x_0)}{6} + \dots$$

Adding the above two equations:

$$ f(x_0 +h) + f(x_0-h) = 2 f(x_0) + h^2 f''(x_0) + \frac{h^4 f^{(4)}(x_0)}{12} + \dots$$

such that:

$$ f''(x_0)\approx \frac{f(x_0+h)+f(x_0-h)-2 f(x_0)}{h^2} + \mathcal{O}(h^2) $$

without having to calculate the first derivative. This same formula is obtained if we estimate the second derivative as the following finite difference of first derivatives:

$$ f''(x_0) \approx \frac{f'(x_0+h/2) - f'(x_0-h/2)}{h} $$