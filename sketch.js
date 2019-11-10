var myFont;

function preload() {
    myFont = loadFont('font/RubikMonoOne-Regular.ttf');
}

/*SKETCH 1*/
var s = function (p) {
    var x = 500;
    var y = 100;
    p.setup = function(){
        p.createCanvas(500, 50);
        
    };

    p.draw = function() {
        p.text("PROBLEM STATEMENT", 0, 30);
        p.textSize(32);
        p.textFont('myFont');
    };
};

    var myp5 = new p5(s, 'c1');

    /*SKETCH 2*/