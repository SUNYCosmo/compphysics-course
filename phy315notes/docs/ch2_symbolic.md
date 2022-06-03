# Symbolic and Plotting Tools

## Symbolic Math using Mathematica
`Mathematica` is a popular tool for symbolic math, and is useful for calculating derivatives, integral, and many other tasks.

SUNY Plattsburgh students can installa `Mathematica` on their personal computer. [See instructions here](https://www.plattsburgh.edu/academics/resources/technology/helpdesk/software.html).

### Performing mathematical calculations in Mathematica
Try typing `D[x^2, x]` and pressing `Shift+Enter` to evaluate the cell:
``` mathematica

 In[1]:= D[x^2, x]
 Out[1]= 2 x
```
The command `D[x^2, x]` calculates the derivative of $x^2$ with respect to $x$.

To calculate an integral, use the `Integrate` command as:
``` mathematica
 In[2]:= Integrate[2 x, x]
 Out[2]= x^2
```

`Mathematica` can perform many popular integrals that show up in various topics of physics and mathematics. For example:  

Consider the Gaussian (normal) distribution with one standard deviation ($\sigma=1$) and zero mean $(\mu=0)$:

$$ \mathcal{N}(x) = \frac{1}{\sqrt{2 \pi}} e^{-{x^2}/{2}} $$

* Suppose we want to find the integral of this function from $-\infty$ to $\infty$. Such a definite integral will result in the area under the curve between the limits. Following the same syntax as above, using `Sqrt[2 Pi]` for $\sqrt{2 \pi}$ and using `Exp[-x^2]` for $e^{-x^2}$, attempt to calculate the definite integral:

    $$ \int_{-\infty}^\infty \frac{e^{-x^2/2}}{\sqrt{2 \pi}} dx $$

    ??? note "Check your `Mathematica` code and output"
        ``` mathematica
        In[3]:= Integrate[(1/Sqrt[2 Pi]) Exp[-(x^2)/2], {x, -Infinity, Infinity}]
        Out[3]= 1
        ```
        That is:
    
        $$\frac{1}{\sqrt{2 \pi}}\int_{-\infty}^\infty \frac{e^{-x^2/2}}{\sqrt{2 \pi}} dx =1$$

        The factor of $1/\sqrt{2 \pi}$ is used to normalize the distribution $P(x)$ so that it can be used as a probability density function (pdf). The integral of a pdf over all possible values should result in one.

* Now calculate another definite integral of the same integrand but taking the limits from $-1$ to $1$ i.e. calculate the definite integral:

    $$ \frac{1}{\sqrt{2\pi}}\int_{-1}^{1} e^{-x^2/2} dx $$

    ??? note "Check your `Mathematica` code and output"
        ``` mathematica
        In[4]:= Integrate[(1/Sqrt[2 Pi]) Exp[-(x^2)/2], {x, -1, 1}]
        Out[4]= Erf[1/Sqrt[2]]
        ```
        
        where [`Erf` is the error function](https://mathworld.wolfram.com/Erf.html){target=_blank}. A numerical output in mathematica can be forced by either using `N[]` or `//N` as follows:
        
        ``` mathematica
        In[5]:= N[Integrate[(1/Sqrt[2 Pi]) Exp[-(x^2)/2], {x, -1, 1}]]
        Out[5]= 0.682689
        ```
        
        That is:
    
        $$\frac{1}{\sqrt{2 \pi}}\int_{-1}^1 e^{-x^2/2} dx = {\rm Erf}\left[\frac{1}{\sqrt{2}}\right] = 0.682689$$
        
* Using `Mathematica` now you should be able to obtain the following results:

$$ \int_{-1}^1 \frac{e^{-x^2/2}}{\sqrt{2\pi}} dx = 0.682689 $$

$$ \frac{1}{\sqrt{2 \pi}}\int_{-2}^2 e^{-x^2/2} dx = 0.9545 $$  

$$ \frac{1}{\sqrt{2 \pi}}\int_{-3}^3 e^{-x^2/2} dx = 0.9973 $$  

Next we will learn some plotting syntax in `Mathematica` and use them to plot the integrand used above $\mathcal{N}(x)=e^{-x^2/2}/\sqrt{2 \pi}$ to better understand the normal probability density function.

## Plotting in Mathematica

``` mathematica
 In[4]:= Plot[(1/Sqrt[2 Pi]) Exp[-x^2], {x, -3, 3}, 
 AxesLabel -> {"x", "P(x)"}, PlotLabel -> "Gaussian Distribution"]
```

??? note "The output will be as follows"
    <figure markdown>
        ![Gaussian distribution](figures/gaussian_mm.svg)
    </figure>


## Plotting in Matplotlib

## Example
