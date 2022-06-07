# Introduction

## Review of Programming
We will mostly make use of the `python` programming language in this introduction and for much of the course (but not always as we will also look at `Mathematica`).

Since a basic course in programming is a pre-requisite for this course, some level of familiarity with programming is assumed. 

The first step is to make sure that you have the proper environment setup on your computer. Make sure that you have `python 3` installed; also install the `numpy` package. One way to make sure that these two packages are installed is to install the [`Anaconda Python Distribution`](https://www.anaconda.com/products/distribution).

Once you have the proper programming environment setup, let's begin with the following example code.

=== "Input"
    
    ``` py title="import numpy"
    import numpy as np                  # (1)
    
    print (np.log10(10), np.log(10))    # (2)
    ```
    
    1. import the numerical library `numpy` for mathematical operations
    2. `np.log10(10)` calculates the base-10 logarithm whereas `np.log(10)` calculates the natural logarithm of 10. `print` function is used to print the two outputs to the screen.

=== "Output"
    ``` py 
    1.0 2.302585092994046
    ```

You should expect two numbers as the output: one for log base 10 i.e. $\log_{\rm 10}$ and the other for natural logarithm i.e. $\ln(10)$.

Let us look at one more example `python` code to illustrate the use of variables and `for` loop.

=== "Input"
    ``` py title="sum of integers from 1 to 100"
    total = 0                           # (1)
    
    for i in range(1, 101):             # (2)
        total = total + i               # (3)
    
    print (total)                       # (4)
    ```
    
    1. variable `total` is initially assigned a value of zero
    2. note the natural language-like syntax for `for` loop in python; also, note that `range(1, 101)` excludes `101`.
    3. note that indentation of code is important in python
    4. the `total` variable is printed on screen once the program exits the `for` loop after adding 1 to 100.

=== "Output"
    ``` py title="sum of integers from 1 to 100"
    5050
    ```
    
## Version Control


## Documentation
