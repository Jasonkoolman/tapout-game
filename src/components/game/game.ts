import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Game } from './game.model';

@Component({
  selector: 'app-game',
  templateUrl: 'game.html'
})
export class GameComponent implements OnInit {

  @ViewChild('svg') svg: ElementRef;

  private game: Game;

  constructor() {}

  ngOnInit(){
    // const controller = new GameController;

    this.game = new Game(this.svg.nativeElement);
    this.game.init();

    window.addEventListener('keyup', (e) => {
      if (e.keyCode === 38 && !this.game.started) {
        this.game.start();
      }
    })
  }

}
