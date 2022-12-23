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

The leading order error is given by the *Euler-Maclaurin formula* for the trapezoidal rule:

$$ \epsilon = \frac{1}{12} h^2 \left[ f'(a)-f'(b)\right].$$

Proofs can be found in textbooks; for example see Chapter 5 of Computational Physics by Mark Newman for a proof. 

The use of the formula given above for the leading order error requires that we have the knowledge of the first derivative of the function. In the case that we have reliable estimates of $f'(a)$ and $f'(b)$, we can choose $N$ and therefore $h$ such that we get the desired leading order error $\epsilon$. 

In the adaptive method described next, one increases the number of slices $N$ used in the integration until a desired error level is attained. The error is also estimated based on two consecutive integral estimates.

## Adaptive Integration

We will discuss adaptive integration for the trapezoidal rule, but similar adaptive methods can be derived and used for other rules of integration. Our goal is to get a numerical estimate of the true value of the integral: 

$$ I = \int_{a}^{b} f(x) dx $$

In the first step choose $N_1$ slices, so that $h_1 = (b-a)/N_1$. From the knowledge that the leading order error is of $\mathcal{O}(h^2)$:

$$ I = I_1 + c h_1^2$$

In the second step choose $N_2 = 2 N_1$ slices i.e. double the number of trapezoids used in the integration sum. Then, $h_2 = h_1/2$ and

$$ I = I_2 + c h_2^2 $$

Since we can get $I_1$ and $I_2$ from our code, let us look at their difference and see if that can be used as an estimate of the error made in our numerical estimation of integral.

$$I_2 - I_1 = c h_1^2 - c h_2^2 = 3\ c h_2^2$$

such that the error of integral estimate $I_2$ can be obtained using:

$$\epsilon_2 = c h_2^2 = \frac{1}{3} \left(I_2 - I_1\right) $$

In the adaptive integration method, we repeat the process of increasing the number of slices in each step $i$; as such the above formula for the error in each step can be generalized to:

$$\epsilon_i = c h_i^2 = \frac{1}{3} \left(I_i - I_{i-1}\right) $$

The goal in the adaptive integration method is to continue increasing the number of slices until $|\epsilon_i|$ is less than a pre-defined error tolerance threshold $\delta$.

### Implementation of adaptive integration method for trapezoidal rule

In the $i-$th step, the area estimated using the trapezoidal rule is:

$$ I_i = h_i \left[ \frac{1}{2} f(a) + \frac{1}{2} f(b) + \sum_{k=1}^{N_i-1} f(a + k h_i) \right] $$

The summation term above can be split into odd and even parts as follows:

$$ \begin{align} I_i &= h_i \left[ \frac{1}{2} f(a) + \frac{1}{2} f(b)+ \sum_{even\ k}^{2\ to \ N_i-2} f(a + k h_i)  + \sum_{odd\ k}^{1\ to \ N_i-1} f(a+k h_i)  \right] \\
                    &= \frac{h_{i-1}}{2} \left[\frac{1}{2} f(a) + \frac{1}{2} f(b) + \sum_{k=1}^{N_{i-1}-1} f(a+k h_{i-1}) \right] + h_i \sum_{k\ odd} f(a+ k h_i) \\
                    &= \frac{1}{2} I_{i-1} + h_i \sum_{k\ odd} f(a+ k h_i) \end{align}$$

That is in each step we only have to evaluate the new $N_i/2$ points and can reuse the previously evaluated points.

!!! question "Implement a code for adaptive integration"

    Use the formula derived above to implement a code that performs the following integration using adaptive integration method for trapezoidal rule with a pre-defined error $\delta$:

    $$ I = 2 \int_{-1}^{1} \sqrt{1- x^2} $$

    This integral should result in $\pi$ as it gives us the area of a unit circle. Check that you can get better (higher precision) estimates of $\pi$ by decreasing the pre-defined error.

    === "Python code" 
        ``` py
        import numpy as np

        a = -1
        b = 1
        N = 5

        delta = 0.000001
        eps = 2*delta
        
        def f(x):
            return 2.0*np.sqrt(1-x*x)

        h = (b-a)/N
        I0 = h*(0.5*(f(a)+f(b))+np.sum(np.array([f(a+k*h) for k in range(1, N-1)])))

        while (eps>delta):
            N = N*2
            h = h/2.0
            I = 0.5*I0+h*np.sum(np.array([f(a+k*h) for k in range(1, N-1, 2)]))
            eps = (I-I0)/3.0
            I0 = I

        print (I)
        ```

    === "Fortran code"
        ``` f90
        program adapint
        implicit none
    
        integer :: N, k
    
        double precision :: a, b, delta, eps, h, I0, I
    
        double precision :: func
        external func
    
        double precision, allocatable :: array1(:)
    
        a = -1
        b = 1
        N = 5
    
        delta = 0.000001
        eps = 2*delta
    
        h = (b-a)/N
    
        allocate(array1(N))
        do k = 1, N-1
            array1(k)=func(a+k*h)
        end do
    
        I0 = h*(0.5*(func(a)+func(b))+sum(array1))
        deallocate(array1)
    
        do while (eps>delta)
            N = N*2
            h = h/2
        
            allocate(array1(N))
            do k = 1, N-1, 2
                array1(k)=func(a+k*h)
            end do
        
            I = 0.5*I0+h*sum(array1)
            deallocate(array1)
            eps = (I-I0)/3.0
            I0 = I
        end do
    
        print *, I

        end program adapint

        double precision function func(x)
            implicit none
            double precision, intent(in) :: x

            func = 2.0*sqrt(1-x*x)

        end function func
        ```
    
    === "Python code output"
        ```
        3.1415904352148765

        real	0m4.039s
        user	0m3.953s
        sys	0m0.084s
        ```
        
        code run using `python filename.py'; compare to the fortran code output

    === "Fortran code output"
        ```
        3.1415915187110408     

        real	0m0.006s
        user	0m0.006s
        sys	0m0000s
        ```

        code run after compiling using GNU fortran compiler 11.3 as:

        `gfortran filename.f90 -o adapint`; compare the execution speed with python code output


