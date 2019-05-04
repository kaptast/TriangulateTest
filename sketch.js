var sensors = [];
var showSource = false;
var sourceX = 0;
var sourceY = 0;

const SENSON_RANGE = 150;

function setup() {
    createCanvas(1366, 768);

    for (var i = 0; i < 50; i++){
        sensors.push(new Sensor(i, random(SENSON_RANGE / 2, windowWidth - SENSON_RANGE / 2),random(SENSON_RANGE / 2, windowHeight - SENSON_RANGE / 2)));
    }
    textSize(10);
}
  
function draw() {
    noStroke();
    fill(255, 255, 255);
    rect(0, 0, windowWidth, windowHeight);
    sensors.forEach(function(element) {
        element.draw();
    });

    if (showSource){
        //Range
        noFill();
        stroke(0, 0, 255);
        circle(sourceX, sourceY, SENSON_RANGE);

        //Position
        fill(0, 0, 255);
        noStroke();
        circle(sourceX, sourceY, 10);

        // Smallest circle
        var points = [];
        for (var i = 0; i < 50; i++){
            if(sensors[i].detected) {
                points.push({x: sensors[i].X, y: sensors[i].Y});
            }
        }
        var c = makeCircle(points);
        
        noFill();
        stroke(255, 0, 0);
        circle(c.x, c.y, c.r);
        fill(255, 0, 0);
        noStroke();
        circle(c.x, c.y, 10);

        var distance = dist(sourceX, sourceY, c.x, c.y);

        fill(0,0,0);
        text("Distance: " + distance, 10, 10);
    }
}

function mouseClicked() {
    if (showSource){
        sensors.forEach(function(element) {
            element.reset();
        });
        console.log("Reseted");
        showSource = false;
    } else {
        sourceX = mouseX;
        sourceY = mouseY;
        sensors.forEach(function(element) {
            element.isDetected(sourceX, sourceY);
        });

        showSource = true;
    }

    return false;
}