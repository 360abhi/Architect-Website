import { Component } from '@angular/core';
import { Grayscale } from '../Services/grayscale.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(public grayservice : Grayscale) {}

  isClicked: boolean = false;

  btnClicked() : void {
    this.isClicked = !this.isClicked;
  }

}
