// class Square extends Polygon {
//     constructor(lenght) {
//         // The reserved 'super' keyword is for making super-constructor
//         // calls and allows access to parent methods
//         //
//         // Here, it calls the parent class' contructor with lenghts
//         // provided for the polygon's width and height
//         super(lenght, lenght);
//         // Note: In derived  classes, `super()` must be called before any object
//         // can use `this`. Leaving this out will cause an ReferenceError.
//         this.name = 'Sqaure';
//     }
    
//     // Getter and Setter methods are supported in classes
//     // Similar to thier ES5 equivalents
//     get area() {
//         return this.height * this.width;
//     }

//     set area(value) {
//         this.height = value ** 0.5;
//         this.width = value ** 0.5;
//     }
// }

// let res = new Square(5);

// console.log