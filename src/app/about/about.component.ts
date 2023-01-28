import { Component } from '@angular/core';
import { Aboutservice } from '../Services/about.service';
import { Grayscale } from '../Services/grayscale.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [Aboutservice]
})
export class AboutComponent {

  aboutobject;

  isSelected : boolean = false
  name:string = ""
  position:string = "" 
  
  mygrayscale = {
    'grayscale' : true
  }
  graytoggle : boolean = true;

  original:string = "original"

  constructor(aboutservice: Aboutservice, public grayservice: Grayscale){
    this.aboutobject = aboutservice.getAbouts();
  }

  contacted(name : any, position:any) : void{
    this.isSelected = true;
    this.name = name.innerText;
    this.position = position.innerText;
    
  }

  

  changeBG() : void{
    this.graytoggle = !this.graytoggle
    this.original = this.graytoggle ? 'original' : 'grayscale'
    this.mygrayscale = {
      'grayscale' : this.graytoggle
    }
    this.grayservice.myData = {
      'grayscale' : this.graytoggle
    }
  }

}
