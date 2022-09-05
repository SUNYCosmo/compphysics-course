# Introduction

## Review of Programming
We will mostly make use of the `python` programming language in this introduction and for much of the course (but not always as we will also look at `Mathematica`).

Since a basic course in programming is a pre-requisite for this course, some level of familiarity with programming is assumed. 

The first step is to make sure that you have the proper environment setup on your computer. Make sure that you have `python 3` installed; also install the `numpy` package. One way to make sure that these two packages are installed is to install the [`Anaconda Python Distribution`](https://www.anaconda.com/products/distribution). Alternatively, for quick running of code on the web, you could make use of [Google Colab](https://colab.research.google.com), which will open a notebook interface in which you can run python code.

Once you have the proper programming environment setup, let's begin with the following basic tasks that most programming languages can do - output, loop and condition.

### Printing Output

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

### The `for` loop
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
    4. the `total` variable is printed on the screen once the program exits the `for` loop after adding 1 to 100.

=== "Output"
    ``` py title="sum of integers from 1 to 100"
    5050
    ```

### The `if` condition

Consider the following `python` code that checks whether an integer is odd or even.

=== "Input"
    ``` py title="check if an integer is odd or even"
    def check_even(n):
        """Checks if the given integer n is even
            
        Args:
            n: integer
            
        Returns:
            True if n is even, False else
        """

        if (n%2==0):
            return True
            
        return False
    
    print (check_even(9), check_even(10))
    ```

=== "Output"
    ``` py title="check if an integer is odd or even"
    False True
    ```

In the code above we have also used `def` to define a new function. Inside the `def` function block, we have used three double-quote `"""` format for [docstring](https://peps.python.org/pep-0257/).

### The `while` loop

The `while` loop runs as long as the condition given in its syntax is satisfied. The `while` loop can be used instead of the `for` loop to get the sum of integers; see example below:

=== "Input"
    ``` py title="sum of integers from  1 to 100 using while"

    total = 0
    i = 0
    while (i<=100):
        total = total + i
        i = i + 1

    print (total)
    ```

=== "Output"
    ``` py title="sum of integers from 1 to 100 using while"
    5050
    ```

!!! question "Fibonacci numbers"

    Write a python code to print out Fibonacci numbers upto a certain value say all the Fibonacci numbers less than 10000. The first two Fibonacci numbers are 1,1 and the rule for Fibonacci sequence is that the next number is obtained by a sum of previous two numbers.

## Lists and Arrays

### Lists

=== "Input"
    ``` py title="list example"
    List1 = [1, 2, 3]
    List2 = ["red", "blue", "green"]
    List3 = [-1, 0, "orange"]

    print (List1[0], List2[1], List3[2])

    List1.append(4)
    print (List1)
    ```

=== "Output"
    ``` py title="list example"
    1 blue orange
    [1, 2, 3, 4]
    ```

### Arrays

## Version Control

Computer codes (and even documents) may require updating at times. At the early stages of developing a computer code, the frequency of updates may be very high. Even for a matured piece of code, there may be maintenance updates that will require you to update the code time and again. **Version control** tools help us with this process. They can also be useful if we decide to revert a change at a later time and in case that multiple people are collaborating on the same piece of software or document at once.

We will make use of `github` for version control. The underlying version control software utilized by `github` is called `git`.

Please take the following `github skills` course to begin.

* [Introduction to GitHub - Github Skills](https://github.com/skills/introduction-to-github)

## Documentation

The code you write will likely be read by other people that may include friends, collegues, professors, customors and users. Therefore, good documentation of code is very important and perhaps even more so for large projects. Large projects typically also follow a certain style guide so that the code and documentation written by numerous contributors have consistent style.

For example, there is [PEP 8 Style Guide for Python Code](https://peps.python.org/pep-0008/) and [PEP 257 Docstring Conventions](https://peps.python.org/pep-0257/) that are generally followed.

Another popular style guide for python is the [Google Python Style Guide](https://google.github.io/styleguide/pyguide.html).

In this course, we will not be worrying about strictly following a style guide, but it is good to know that these exist and that you can make use of one if necessary. 