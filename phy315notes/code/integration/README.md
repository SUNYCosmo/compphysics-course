## Simple speed comparison

### Python code output with timing
```bash
3.1415904352148765

real    0m4.039s
user    0m3.953s
sys 0m0.084s
```
code run using Python 3.9 on Ubuntu 22.04; compare to the fortran code output below:

### Fortran code output with timing
```bash
3.1415915187110408     

real    0m0.006s
user    0m0.006s
sys 0m0000s
```
code run after compiling using GNU fortran compiler 11.3 `gfortran adapint.f90 -o adapint`
