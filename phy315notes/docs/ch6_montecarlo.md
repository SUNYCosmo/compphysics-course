# Monte Carlo Methods

## Random numbers

Consider the output of the following code:
``` py
import random
    
random.seed(1000)
print (random.random(), random.random())
```

The output will be two numbers printed on the screen. The `random.random()` command gives you a random number between `0` and `1`. The likelihood of getting a particular value between `0` and `1` is the same. In statistical language, such a likelihood/probability is callend a uniform distribution.

### Estimating area using a Monte Carlo method

We can make use of random numbers to estimate areas. Suppose we want to estimate the area of the unit circle. 

!!! note "Area of a unit circle"

    $$ A = \pi r ^2 = \pi (1)^2 = \pi $$

In this case, we know the answer is $\pi$. Therefore, we can frame this exercise as a method to estimate the numerical value of $\pi$ as well.


## Monte Carlo Integration

## Markov Chain Monte Carlo (MCMC)
