import { Component } from '@angular/core';
import { Grayscale } from '../Services/grayscale.service';
import { ContactData } from '../Services/contactdata.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(public grayservice : Grayscale, public contactdata: ContactData) {}

  isClicked: boolean = false;

  btnClicked() : void {
    this.isClicked = !this.isClicked;
  }

  addtoform(myname : any, myposition : any, email : any, comment : any): void {
    myname.value = this.contactdata.name;
    myposition.value = this.contactdata.position;
    email.value = this.contactdata.email;
    comment.value = this.contactdata.description;
  }

  


}
