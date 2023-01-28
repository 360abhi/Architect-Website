import { Component } from '@angular/core';
import { Grayscale } from '../Services/grayscale.service';

@Component({
  selector: 'app-bglogo',
  templateUrl: './bglogo.component.html',
  styleUrls: ['./bglogo.component.css']
})
export class BglogoComponent {

  constructor(public grayservice : Grayscale) {}

  
}
