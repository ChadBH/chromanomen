export class Score {

  score : number;

  constructor(score : number){
    this.score = score;
  }

  wrong(){
    this.score -= 1;
  }

  right(){
    this.score += 1;
  }

}
