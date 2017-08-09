import { Shape } from './shapes/shape.model';
import { Circle } from './shapes/circle.model';
import { EventEmitter } from '@angular/core';

export class Game {

  /* Whether the game started */
  public started: boolean;

  /* Interval timer */
  private timer: any;

  /* The game score */
  private score: number;

  // /* Called when a shape is completed */
  // public shapeCompleted: EventEmitter<Shape> = new EventEmitter();
  //
  // /* Called when all shapes are completed */
  // public shapesCompleted: EventEmitter<boolean> = new EventEmitter();
  //
  // /* Called when a new shape was assigned */
  // public shapeAssigned: EventEmitter<Shape> = new EventEmitter();
  //
  // /* The present shapes */
  // private shapes: Array<Shape> = [];
  //
  // /* Index of the active shape */
  // private activeShapeIndex: number;
  //
  // /* Indexes of the completed shapes */
  // private completedShapes: Array<number> = [];

  /**
   * @constructor
   *
   * @param {SVGElement} svg
   */
  constructor(private svg: SVGElement) {}

  /**
   * Initialize the game.
   */
  init() {
    const circle2 = new Circle(this.svg, {
      size: 10,
      radius: 80,
      gutter: 30,
      fillColor: 'yellow',
      trackColor: 'rgba(255,255,255,0.2)'
    });

    circle2.create();

    const circle = new Circle(this.svg, {
      size: 10,
      radius: 60,
      gutter: 10,
      fillColor: 'red',
      trackColor: 'rgba(255,255,255,0.2)'
    });

    circle.create();

    this.svg.onmousedown = () =>  {
      this.started = true;
      this.timer = setInterval(() => circle.fill(1.25), 1000/60);
    };
    this.svg.onmouseup = () => {
      if (this.started) {
        this.started = false;
        clearInterval(this.timer);
      }
    };
  }

  // init() {
  //   const context = this.canvas.getContext('2d'),
  //         center = this.canvas.width/2;
  //
  //   for (let i = 0; i < 4; i++) {
  //     const circle = new Circle(context, {
  //       gap: 5 + (Math.random() * 20),
  //       size: 12,
  //       steps: 80,
  //       radius: 75 + (i * 30),
  //       center: center,
  //       color: i%2 === 0 ? 'orange' : 'green'
  //     });
  //
  //     this.shapes.push(circle);
  //   }
  //
  //   this.activeShapeIndex = this.shapes.length-1;
  //
  //   this.canvas.onmousedown = () =>  {
  //     this.started = true;
  //     this.timer = setInterval(() => this.getActiveShape().next(), 1000/60);
  //   };
  //   this.canvas.onmouseup = () => {
  //     if (this.started) {
  //       this.onShapeComplete();
  //     }
  //   };
  // }
  //
  // /**
  //  * End the game.
  //  */
  // end() {
  //   this.shapesCompleted.emit(true);
  // }
  //
  // /**
  //  * Assign a new shape to complete.
  //  */
  // assign() {
  //   this.completedShapes.push(this.activeShapeIndex);
  //   this.activeShapeIndex = this.shapes.length - (1 + this.completedShapes.length);
  //   this.shapeAssigned.emit(this.getActiveShape());
  // }
  //
  // /**
  //  * Get the active shape.
  //  *
  //  * @return {Shape}
  //  */
  // getActiveShape(): Shape {
  //   return this.shapes[this.activeShapeIndex];
  // }
  //
  // /**
  //  * Callback when a shape is completed.
  //  */
  // onShapeComplete() {
  //   clearTimeout(this.timer);
  //   this.shapeCompleted.emit(this.getActiveShape());
  //   this.completedShapes.length >= this.shapes.length ?
  //     this.end():
  //     this.assign();
  // }

}
