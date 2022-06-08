# Numerical Methods for Differentiation and Integration

## Finite Differences
Numerical derivatives of a function $f(x)$ at $x=x_0$ can be calculated by the method of finite differences. Recall that the derivative $f'(x_0)$ tells you about the slope of the tangent at $x=x_0$. Such a slope can be drawn by drawing a line by considering two nearby points on either side of $P(x_0, f(x_0))$: $P_-(x_0-h, f(x_0-h))$ and $P_+(x_0+h, f(x_0+h))$ where $h$ is small. Therefore, the estimate for the slope and therefore the derivative $f'(x_0)$ becomes:

$$f'(x_0) = \frac{f(x_0+h)-f(x_0-h)}{x_0+h-(x_0-h)}=\frac{f(x_0+h)-f(x_0-h)}{2 h}$$

You should convince yourself that as $h\rightarrow 0$, your estimate approaches the exact derivative.

### Sample code and accuracy check

=== "Python code for central difference"
    ``` py title="central difference derivative"
    def central_diff_sin(x, h):
        """Calculate numerical derivative of sin(x) using central difference
        
        Parameters
        ----------
        x : real
            angle in radians
        h : real
            step size in radians
        """
        import numpy as np
        return (np.sin(x+h)-np.sin(x-h))/(2*h)
    ```

=== "Accuracy check"
    | x | h | `central_diff_sin(x,h)` | `cos(x)` (actual) | percent accuracy |
    | - | - | ----------------------- | ----------------- | ---------------- |
    | 0.3 | 0.03 | 0.9551932 | 0.9553365 | 0.01502 |
    | 0.3 | 0.02 | 0.9552728 | 0.9553365 | 0.00665 |
    | 0.3 | 0.01 | 0.9553206 | 0.9553365 | 0.00166 |


<div id="canvas-holder">
</div>

<script>
    let width = 640;
    let height = 300;

    let yf = -height/3;
    let xf = 9;
    
    let x0 = 0.3;
    let radius = 7;

    function setup() {
        // setup() runs once
        var canvas = createCanvas(width,height);
        canvas.parent('canvas-holder');
        slider = createSlider(0.01, 1.5, 1.5, 0.01);
        slider.parent('canvas-holder');
        slider.style('width', "200px");
        hdisplay = createP();
        hdisplay.parent('canvas-holder');
        frameRate(30);
    }

    function converttox(i) {
        return xf*(i-width/2)/width;
    }

    function converttoi(x) {
        return (x*width/xf)+width/2;
    }

    function converttoj(y) {
        return (height/2)+yf*y;
    }

    function central_diff_sin(x, h) {
        return (sin(x+h)-sin(x-h))/(2*h);
    }
    
    function draw_dashed_line(x1, y1, x2, y2) {
        drawingContext.setLineDash([5,5]);
        strokeWeight(1);
        slope = (y2-y1)/(x2-x1);
        b = y2-slope*x2;
        x3 = converttox(0);
        y3 = slope*x3+b;
        x4 = converttox(width);
        y4 = slope*x4+b;
        stroke("black");
        line(0, converttoj(y3), width, converttoj(y4));
    }

    function draw() {
        // draw() loops forever, until stopped
        background(246);
        drawingContext.setLineDash([]);
        fill(40);
        strokeWeight(.5);
        text("O", width/2.1, height/2.1);
        text("y = sin(x)", 20, 20);
        
        h = slider.value();
        
        text(String('h = ' + h) , 20, height/1.25);
        
        stroke("gray");
        line(width/2, 0, width/2, height);
        line(0, height/2, width, height/2);

        est = (central_diff_sin(x0, h)).toFixed(7);
        per = (100*(1-est/cos(x0))).toFixed(5);
        hdisplay.html('h is '+h+ ', central difference estimate is ' + est + ', percentage difference is ' + per);
    
        for (i=0; i<=width; i=i+0.5) {
            x = converttox(i);
            stroke("blue");
            strokeWeight(2);
            point(i, converttoj(sin(x)));
        }

        pi = converttoi(x0); pj = converttoj(sin(x0));
        ppi = converttoi(x0+h); ppj = converttoj(sin(x0+h));
        pmi = converttoi(x0-h); pmj = converttoj(sin(x0-h));
        
        stroke("black"); strokeWeight(.5);
        text("P", 0.98*pi, 0.9*pj);
        text("P+", 0.98*ppi, 0.9*ppj);
        text("P-", 1.02*pmi, 1.05*pmj);
        
        stroke("red"); strokeWeight(1.5);
        fill("red");
        
        circle(pi, pj, radius);
        fill("none");
        circle(converttoi(x0-h), converttoj(sin(x0-h)), radius);
        circle(converttoi(x0+h), converttoj(sin(x0+h)), radius);
        draw_dashed_line(x0-h, sin(x0-h), x0+h, sin(x0+h));     
    }
</script>

### Estimating accuracy
In the example above, we knew the correct value of the operation that we were calculating numerically of since $\frac{d\sin(x)}{dx} = \cos x$. However, the actual value of the numerical methods lies when calculating quantities that do not have an easy analytic solution. In such cases, it is useful to be able to have some knowledge of the error in the numerical estimate. 

## Numerical Integration

### Trapezoid rule

### Simpson's rule

## Adaptive Integration

## Examples and Exercises
1. Work out a forward difference approach (i.e. use the slope of line made by $P_+$ and $P$) to taking numerical derivative and compare it with the central difference method discussed above in terms of accuracy.
2. Suppose you have a sampled function i.e. the function values are known (let's say at a regular interval of $h$). Which one is a better approach -- central difference or forward difference for calculating numerical derivatives?
