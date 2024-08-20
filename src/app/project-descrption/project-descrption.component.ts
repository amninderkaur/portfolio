import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-project-descrption',
  templateUrl: './project-descrption.component.html',
  styleUrls: ['./project-descrption.component.css']
})
export class ProjectDescrptionComponent implements OnInit {
  projects: any[] = []; 
  projectId!: number;
  foundProject: any; 
  @Input() darkMode: boolean = false;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getId();
  }

  getLocal1() {
    const url1 = 'assets/data/projects.json';
    this.http.get<any[]>(url1).subscribe((res) => {
      this.projects = res;
      console.log('Projects array:', this.projects);
      this.findProjectById();
    });
  }

  getId(): void {
    this.route.paramMap.subscribe(params => {
      this.projectId = Number(params.get('id'));
      console.log('Project ID:', this.projectId);
      this.getLocal1(); 
    });
  }

  findProjectById(): void {
    if (this.projects.length > 0 && this.projectId !== undefined) {
      this.foundProject = this.projects.find(p => p.id === this.projectId);
      if (this.foundProject) {
        console.log('Project found:', this.foundProject);
      } else {
        console.log('Project not found');
        this.foundProject = null; 
      }
    }
  }
}
