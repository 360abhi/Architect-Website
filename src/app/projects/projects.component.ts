import { Component } from '@angular/core';
import { Projectservice } from '../Services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers:[Projectservice]
})
export class ProjectsComponent {

  projects;

  constructor(projectservice: Projectservice){
    this.projects = projectservice.getProjects();
  }

  
}
