import * as Color from 'color';

export class Choice{
  public hex : string;
  public btnColor: string;
  public textColor: string;
  public name: string;
  public isWrong: boolean;
  public isSelected: boolean;
  public icon: string;
  public color: Color;

  public constructor(obj: any){
    this.hex = obj.hex;
    this.name = obj.name;
    this.btnColor = "#FFF";
    this.textColor= "#000"
    this.color = Color(this.hex);
  }

select(){
    this.isSelected = true;
    this.btnColor = this.hex;
    if(this.color.isDark()){
      this.textColor = this.color.negate().lighten(.5).hex();
    }else{
      this.textColor = this.color.negate().darken(.5).hex();
    }
}

mouseenter(){
  if(!this.isSelected){
    this.btnColor = "#DDD";
  }
}

mouseleave(){
  if(!this.isSelected){
    this.btnColor = "#FFF";
  }
}

wrong(){
  this.select();
  this.isWrong = true;
  this.icon = "times";
}

right(){
  this.select();
  this.icon = "check";
}

}
