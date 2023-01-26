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

  constructor(aboutservice: Aboutservice){
    this.aboutobject = aboutservice.getAbouts();
  }

}
