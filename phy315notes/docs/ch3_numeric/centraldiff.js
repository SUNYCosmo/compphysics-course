let width = 640;
let height = 300;

let yf = -height/3;
let xf = 9;
    
let x0 = 0.3;
let radius = 7;

// p5js setup
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
    per = (100*(1-est/cos(x0))).toFixed(6);
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
    text("P_", 1.02*pmi, 1.05*pmj);
    
    stroke("red"); strokeWeight(1.5);
    fill("red");
    
    circle(pi, pj, radius);
    fill("none");
    circle(converttoi(x0-h), converttoj(sin(x0-h)), radius);
    circle(converttoi(x0+h), converttoj(sin(x0+h)), radius);
    draw_dashed_line(x0-h, sin(x0-h), x0+h, sin(x0+h));     
}
