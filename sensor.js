class Sensor{
    constructor(id, x, y) {
        this.X = round(x);
        this.Y = round(y);
        this.ID = id;
        this.Range = SENSON_RANGE;
        this.detected = false;
        this.Stength = 0;
    }

    draw(){
        fill(0, 0, 0);
        noStroke();
        text(this.ID, this.X - 5, this.Y + 20);
        if (this.detected){
            noStroke();
            fill(0, 255, 0, 255 - this.Stength);
            circle(this.X, this.Y, 10);
            noFill();
            stroke(0, 255, 0)
            //circle(this.X, this.Y, this.Range);
            
        } else {
            noStroke();
            fill(255, 0, 0);
            circle(this.X, this.Y, 10);
        }
    }

    isDetected(x, y){
        var distance = dist(x, y, this.X, this.Y)
        if (distance <= this.Range){
            this.detected = true;
            this.Stength = round(map(distance, 0, 150, 0, 255));
            console.log("ID: " + this.ID + " X: " + this.X + " Y: " + this.Y + " Strength: " + this.Stength);
        }
    }

    reset(){
        this.detected = false;
    }
}