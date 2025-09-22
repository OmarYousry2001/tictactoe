import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TicTacToe } from './tic-tac-toe/tic-tac-toe';



@Component({
  selector: 'app-root',
  imports: [TicTacToe],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'TicTacToe';
}
