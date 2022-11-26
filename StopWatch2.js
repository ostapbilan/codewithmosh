// let person = { name: 'Ostap'};

// console.log(person);

// function Circle (radius) {
//     this.radius = radius;
//     this.move = function () {
//         console.log('move');
//     }
// }

// const c1 = new Circle(1);

// Circle.prototype.draw = function (){
//     console.log('draw');
// }

// console.log(Object.keys(c1));


function Stopwatch () {

    let startTime,endTime,duration,running = 0;

    Object.defineProperty(this, 'startTime', {
        get: function() { return startTime; },
        
      });
  
    Object.defineProperty(this, 'endTime', {
        get: function() { return endTime; }
      });
    Object.defineProperty(this, 'running', {
        get: function() { return running; }
      });
  
    Object.defineProperty(this, 'duration', {
      get: function() { return duration; },
      set: function (value) {duration = value;}

    });
  };



Stopwatch.prototype.start = function() {
        if (this.running) 
          throw new Error('Stopwatch has already started.');
        
        this.running = true; 
    
        this.startTime = new Date();
};

Stopwatch.prototype.stop = function() {
        if (!this.running) 
          throw new Error('Stopwatch is not started.');
    
        this.running = false; 
          
        this.endTime = new Date();
    
        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        this.duration += seconds; 

  };

Stopwatch.prototype.reset = function() { 
        this.startTime = null;
        this.endTime = null;
        this.running = false; 
        this.duration = 0; 

  };
