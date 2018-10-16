import * as Color from 'color';

export class Choice{
  public hex : string;
  public btnColor: string;
  public textColor: string;
  public name: string;
  public isWrong: boolean;
  public isSelected: boolean;
  public icon: string;

  public constructor(obj: any){
    this.hex = obj.hex;
    this.name = obj.name;
    this.btnColor = "#FFFFFF";
    this.textColor= "#000000"
  }

select(){
    this.isSelected = true;
    this.btnColor = this.hex;
    var color = Color(this.hex);
    if(color.isDark()){
      //this.textColor = "#FFFFFF";
      this.textColor = color.negate().lighten(.5).hex();
    }else{
      //this.textColor = "#000000";
      this.textColor = color.negate().darken(.5).hex();
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
