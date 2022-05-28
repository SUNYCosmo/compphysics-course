# Monte Carlo Methods

## Random numbers

Consider the output of the following code:
``` py title="random module"
import random            
    
random.seed(1000)        
print (random.random(), random.random())
```

The output will be two numbers printed on the screen. The [`random.random()`](https://docs.python.org/3/library/random.html) command gives you a random number in the range `[0.0, 1.0)`. The likelihood of getting a particular value between `0` and `1` is the same. In statistical language, such a likelihood/probability is called a uniform distribution. If you want to get a random number in a different range, say `[a, b]`, you can either use the result of `#!python random.random()` and rescale it appropriately, or directly use the function `#!python random.uniform(a, b)`.

**Use of `#!python random.seed()`**: If you use the same `seed` number (argument) in calling `#!python random.seed(seed)` before calling `#!python random.random()`, the output is identical for the same `seed`. Because the returned random numbers depend on the `seed`, the number generator used by the `random` module is called a *pseudo-*random number generator. Such a generator is useful if you have to reproduce results (e.g. simulation) at a later time. If you do not provide an argument to `random.seed` or set `random.seed(None)`, the current system time is used as a proxy to a random seed and you will get different results each time you call `random.random()`.


### Estimating area using a Monte Carlo method

We can make use of random numbers to estimate areas. Suppose we want to estimate the area of the unit circle. 

??? note "Area of a unit circle"

    $$ A = \pi r ^2 = \pi (1)^2 = \pi $$

In this case, we know the answer is $\pi$. Therefore, we can frame this exercise as a method to estimate the numerical value of $\pi$ as well.

Consider a unit circle embedded in a square. Now, in each step, we will generate two random numbers $(x, y)$, and check whether this randomly generated point lines inside of the unit circle or outside (but still inside the embedding square).

Then an estimate of the area of the unit circle can be made:

$$ A = \left( \frac{\rm points\ inside\ the\ cirlce}{\rm total\ points} \right) \times {\rm area\ of\ embedding\ square}$$


<table>
<tr>
<th>
<canvas id="canvas1" width="300" height="300"</canvas>
</th>
<th>
<br><br><br>

<p>Points Inside: <label id="label1">0</label>  </p>

<p>Total Points: <label id="label2">0</label></p>

<p>Area Estimate: <label id="Aest"></label>  </p>
<hr>
Refresh the page to estimate using a new set of random points.
</th>
</tr>
</table>
<script>
    var canvas = document.getElementById('canvas1')
    
    if (canvas.getContext) {
            var ctx = canvas.getContext('2d');
    }
    
    ctx.beginPath();
    ctx.strokeStyle="blue";
    ctx.rect(50, 50, 200, 200);
    ctx.stroke();
          
    ctx.beginPath();
    ctx.strokeStyle="red";
    ctx.arc(150, 150, 100, 2*Math.PI, false);
    ctx.stroke();
            
    let pts = 0;
    let total = 0;
        
    function randomPoint() {
    
        x = Math.random()*200+50;
        y = Math.random()*200+50;
        
        if ((x-150)*(x-150)+(y-150)*(y-150)<=10000) {
            pts = pts + 1;
            ctx.fillStyle="green";
        } else {
            ctx.fillStyle="blue";
        }
        
        total = total + 1;  
        
        ctx.fillRect(x, y, 1, 1);
        document.getElementById('label1').innerHTML = pts;
        document.getElementById('label2').innerHTML = total;
        
        Area = 4*pts/total
        document.getElementById('Aest').innerHTML = Area;
        
    }
    
    for (let i = 0; i < 100000; i++) {
        setTimeout(function() { randomPoint();}, 1000);                     
    }

</script>

??? note "Python code to estimate $\pi$"

    ``` py title="Estimate area of a unit circle"
    def pi_estimate(total=1000):
        pts_in = 0
        
        for i in range(total):
            x = random.uniform(-1, 1)
            y = random.uniform(-1, 1)
        
            if (x**2.0+y**2.0 <= 1.0):
                pts_in = pts_in + 1.0
    
        return 4.0*pts_in/total
    
    print (pi_estimate())
    ```
    
    Increasing the number of points used through the `total` argument in the `pi_estimate` function improves the estimate. If $N$ is the number of points used, the standard error scales as $1/\sqrt{N}$.
    



## Monte Carlo Integration

## Markov Chain Monte Carlo (MCMC)

## Examples
