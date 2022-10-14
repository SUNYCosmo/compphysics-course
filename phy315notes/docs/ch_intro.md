# Introduction

## Review of Programming
We will mostly make use of the `python` programming language in this introduction and for much of the course (but not always as we will also look at `Mathematica`).

Since a basic course in programming is a pre-requisite for this course, some level of familiarity with programming is assumed. 

The first step is to make sure that you have the proper environment setup on your computer. Make sure that you have `python 3` installed; also install the `numpy` package. One way to make sure that these two packages are installed is to install the [`Anaconda Python Distribution`](https://www.anaconda.com/products/distribution). Alternatively, for quick running of code on the web, you could make use of [Google Colab](https://colab.research.google.com), which will open a notebook interface in which you can run python code. Google Colab uses a modified versin of [Jupyter Notebook](https://jupyter.org/); you can try to install/run jupyter notebook on your computer if you find the notebook interface useful. Alternatively, 

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

You should expect two numbers as the output: one for log base 10 i.e. $\log_{\rm 10}$ and the other for natural logarithm i.e. $\ln(10)$. For the above code to run, you may save the code in a file with name such as `filename.py` and on the command line enter: 
```
python filename.py
```
Depending on your installation of python, you may also have to install the additional library used in your code; for example, if you do not have the `numpy` library installed, you can install using 
    
```
pip install numpy
```

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

### In-built Lists in Python

=== "Input"
    ``` py title="list example"
    List1 = [1, 2, 3]
    List2 = ["red", "blue", "green"]
    List3 = [-1, 0, "orange"]

    print (List1[0], List2[1], List3[2])

    List1.append(4)                         # (1)
    print (List1)

    List1.pop()                             # (2)
    print (List1)
    ```

    1. Add an element to the list.
    2. Remove the last element of the list.

=== "Output"
    ``` py title="list example"
    1 blue orange
    [1, 2, 3, 4]
    [1, 2, 3]
    ```

A list can contain different types of elements. As you have seen in the example above, `List3` consists of both integers and an string. Elements can also be added or removed from a list i.e. a list can grow or shrink during the execution of a program.

### Arrays

The `array` module in python supports an object type called `Array` that can do more mathematical operations than the in-built python lists. However, the `numpy` module has support for a similar object `array` with support for more mathematical operations (including vector and matrix operations). Therefore, we will look at the `numpy.array` object:

=== "Input"
    ``` py title="simple numpy.array examples"

    import numpy as np
    
    # first a simple 1D array
    arr1 = np.array([1.0, 2.0, 3.0])
    print (arr1)

    # a simple 2D array
    arr2 = np.array([[1.0, 2.0, 3.0], [1.5, 2.5, 3.5]])
    print (arr2)

    # to access the element of an array we can use indexing as follows:
    print (arr2[0, 0])  # outputs 1.0 (the first row, first column)
    print (arr2[0, 1])  # outputs 2.0 (the first row, second column)
    print (arr1[1]) # outputs 2.0 (the second element of a 1D array)
    ```

=== "Output"
    ``` py title="simple numpy.array examples"
    [[1.  2.  3. ]
    [1.5 2.5 3.5]]

    1.0
    2.0
    2.0
    ```

Now, let us make use of the `numpy.array` and `numpy.sum` to calculate the sum of integers from 1 to 100.

=== "Input"
    ``` py title="numpy.array example to sum integers from 1 to 100"
    import numpy as np
    
    arr3 = np.array([i for i in range(0, 101)])

    print (arr3)

    print (np.sum(arr3))
    ```

=== "Output"
    ``` py title="numpy.array example to sum integers from 1 to 100"
    array([  0,   1,   2,   3,   4,   5,   6,   7,   8,   9,  10,  11,  12,
            13,  14,  15,  16,  17,  18,  19,  20,  21,  22,  23,  24,  25,
            26,  27,  28,  29,  30,  31,  32,  33,  34,  35,  36,  37,  38,
            39,  40,  41,  42,  43,  44,  45,  46,  47,  48,  49,  50,  51,
            52,  53,  54,  55,  56,  57,  58,  59,  60,  61,  62,  63,  64,
            65,  66,  67,  68,  69,  70,  71,  72,  73,  74,  75,  76,  77,
            78,  79,  80,  81,  82,  83,  84,  85,  86,  87,  88,  89,  90,
            91,  92,  93,  94,  95,  96,  97,  98,  99, 100])  

    5050
    ```

In the example above, instead of `arr2 = np.array([i for i in range(0, 101)])` we could have used `arr2 = np.array(range(0, 101))` or simply `arr2 = range(0, 101)` and still obtained the desired result of `5050`. However, the way the syntax is written in the example is more powerful than these substitutes. For example, you can obtain the sum of squares of integers from 1 to 100 $\left(\sum_{i=1}^{100} i^2\right)$ by the following code:

```python
arr3 = np.array([i**2.0 for i in range(0, 101)])
print (np.sum(arr3))
```

### Numpy arrays as vectors and matrices
A numpy array of one dimension can be thought of as a vector, and numpy supports vector operations such as dot product.

=== "Input"
    ``` py title="numpy array as a vector"
    import numpy as np
    v1 = np.array([1.0, -1.0, 2.0])
    v2 = np.array([-1.0, 1.0, 2.0])

    v1dotv2 = v1.dot(v2)    # you could also use np.dot(v1, v2)
    print ("The dot product is: ", v1dotv2)
    ```

=== "Output"
    ``` py title="numpy array as a vector"
    The dot product is: 2.0
    ```

### Initializing a multidimensional array

Sometimes it is useful to initialize a multidimensional array -- for example a $N\times N$ matrix with all entries as zeros. Such an array can be updated later in the code with appropriate values for each element as needed. 

The `numpy.zeros(shape)` function can be used to generate arrays of given shape filled with zeros.

=== "Input 1"
    ``` py
    np.zeros(5)
    ```

=== "Output 1"
    ```py
    array([0., 0., 0., 0., 0.])
    ```

Multidimensional arrays can be generated by giving the shape -- for example a $m \times n$ matrix of zeros can be created using `np.zeros((m,n))`

=== "Input 2"
    ```py
    np.zeros((2,2))
    ```

=== "Output 2"
    ```py
    array([[0., 0.],
           [0., 0.]])
    ```
    
Similar to `np.zeros`, there is also `np.ones` that fills the array with ones.

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