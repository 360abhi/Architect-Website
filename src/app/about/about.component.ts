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

  constructor(aboutservice: Aboutservice){
    this.aboutobject = aboutservice.getAbouts();
  }

  contacted(name : any, position:any,event: Event){
    this.isSelected = true;
    // this.name  = name.ta
    // this.position = "" 
    this.name = name.innerText;
    this.position = position.innerText;

  }

}
