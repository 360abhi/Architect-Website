import { Component } from '@angular/core';
import { Aboutservice } from '../Services/about.service';


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

  constructor(aboutservice: Aboutservice){
    this.aboutobject = aboutservice.getAbouts();
  }

  contacted(name : any, position:any){
    this.isSelected = true;
    this.name = name.innerText;
    this.position = position.innerText;
    
  }

  changeBG(){
    this.graytoggle = !this.graytoggle
    this.original = this.graytoggle ? 'original' : 'grayscale'
    this.mygrayscale = {
      'grayscale' : this.graytoggle
    }
  }

}
