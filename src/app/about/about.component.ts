import { Component } from '@angular/core';
import { Aboutservice } from '../Services/about.service';
import { ContactData } from '../Services/contactdata.service';
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
  email: string = ""
  description : string = ""
  
  mygrayscale = {
    'grayscale' : true
  }
  graytoggle : boolean = true;

  original:string = "original"

  constructor(aboutservice: Aboutservice, public grayservice: Grayscale, public contactdata: ContactData){
    this.aboutobject = aboutservice.getAbouts();
  }

  contacted(name : any, position:any,email:any, description:any) : void{
    this.isSelected = true;
    this.name = name.innerText;
    this.position = position.innerText;
    this.email = email.innerText;
    this.description = description.innerText;
  }

  addToForm() : void {

    this.contactdata.name = this.name;
    this.contactdata.position = this.position;
    this.contactdata.isDone = true;
    this.contactdata.email = this.email;
    this.contactdata.description = this.description;

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
