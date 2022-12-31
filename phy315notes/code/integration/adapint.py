import numpy as np
import numba

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
