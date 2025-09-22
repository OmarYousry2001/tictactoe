import { Component } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  imports: [],
  templateUrl: './tic-tac-toe.html',
  styleUrl: './tic-tac-toe.scss'
})
export class TicTacToe {
  board:string[]=Array(9).fill('');
  currentPlayer:string="x";
  winner:string|null=null;
  isDraw:boolean=false;

  private isCellOccupied(index:number):boolean{
    return this.board[index]  !== ''
  }

  private isGameOver():boolean{
   return this.winner!==null || this.isDraw;
  }
  private isMoveInvalid(index:number):boolean{
    return this.isCellOccupied(index) || this.isGameOver();
  }
  private switchPlayer():void{
    this.currentPlayer = this.currentPlayer==='x'?'o':'x';
  }

  /**
 * Checks if there is a winner in the Tic Tac Toe board.
 *
 * The board is represented as a 1D array of 9 strings (indexes 0–8).
 * Each index corresponds to a cell:
 *
 *  0 | 1 | 2
 * -----------
 *  3 | 4 | 5
 * -----------
 *  6 | 7 | 8
 *
 * Winning conditions are:
 * - Any of the 3 rows having the same symbol (X or O).
 * - Any of the 3 columns having the same symbol.
 * - Any of the 2 diagonals having the same symbol.
 *
 * Implementation details:
 * - `winningCombinations` defines all 8 possible ways to win.
 * - `Array.prototype.some()` checks if at least one combination
 *   satisfies the winning condition.
 * - For a combination [a, b, c], a win occurs if:
 *   1. board[a] is not empty.
 *   2. board[a] === board[b] and board[a] === board[c].
 *
 * @returns {boolean} True if there is a winner, otherwise false.
 */
  checkWinner():boolean{
    const winningCombinations=[
      [0,1,2],[3,4,5],[6,7,8], // rows
      [0,3,6],[1,4,7],[2,5,8], // columns
      [0,4,8],[2,4,6]          // diagonals
    ];

    return winningCombinations.some(([a,b,c]) =>
      this.board[a] &&
      this.board[a] === this.board[b] &&
      this.board[a] === this.board[c] 


    );
  }
  
  private isBoardFull():boolean{
    return this.board.every(cell => cell !== ''); 
  }
  private updateGameStatus():void{
    if(this.checkWinner()){
      this.winner=this.currentPlayer;
    }
    else if(this.isBoardFull())
    {
      this.isDraw=true;
    }
    else
    {
      this.switchPlayer();  
    }
  }
  makeMove(index:number):void{  
    if(this.isMoveInvalid(index)) return;
    this.board[index]=this.currentPlayer;
    this.updateGameStatus();
  }
  resetGame():void{
    this.board=Array(9).fill('');
    this.currentPlayer='x';
    this.winner=null;
    this.isDraw=false;
  } 


}
