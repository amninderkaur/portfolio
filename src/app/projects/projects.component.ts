import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LikeButtonService } from '../like-button.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  @Input() darkMode: boolean = false;
  filteredData: any[] = []; 
  searchTerm: string = '';
  pArray: any[] = []; // Initialize as an array

  constructor(private cardService: LikeButtonService, private http: HttpClient) {}

  ngOnInit() {
    this.getLocal1();
  }

  getLocal1() {
    const url1 = 'assets/data/projects.json'; 
    this.http.get<any[]>(url1).subscribe((res) => {
      this.pArray = res; // Directly use the array from JSON
      this.filteredData = [...this.pArray];
      console.log('Fetched data:', this.filteredData); // Log the response to check the structure
    });
  }

  filterProjects() {
    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      this.filteredData = this.pArray.filter(p => p['title'].toLowerCase().includes(term));
    } else {
      this.filteredData = [...this.pArray];
    }
  }

  like(projectId: number) {
    this.cardService.likeCard(`project-${projectId}`);
  }
}
