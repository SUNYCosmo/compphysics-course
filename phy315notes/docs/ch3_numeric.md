# Numerical Methods for Differentiation and Integration

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
    | 0.1 | 0.03 | 0.9948549 | 0.9950042 | 0.01500 |
    | 0.1 | 0.02 | 0.9949378 | 0.9950042 | 0.00667 |
    | 0.1 | 0.01 | 0.9949876 | 0.9950042 | 0.00167 |

## Numerical Integration

### Trapezoid rule

### Simpson's rule

## Adaptive Integration
