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
    eps = 2.0*delta
    
    h = (b-a)/N
    
    allocate(array1(N))
    do k = 1, N-1
        array1(k)=func(a+k*h)
    end do
    
    I0 = h*(0.5*(func(a)+func(b))+sum(array1))
    deallocate(array1)
    
    do while (eps>delta)
        N = N*2
        h = h/2.0
        
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

    func = 2.0*sqrt(1.0-x*x)
    
end function func




