import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor( private http: HttpClient) { }
  @Input() darkMode: boolean = false;
  data!: any;
  about!:string;
  getLocal2() {
    let url2='assets/data/content.json';
    this.http.get(url2).subscribe((res) => {
      this.data = res;
      this.about= this.data.about;
      });
    }
    
    ngOnInit() {
      this.getLocal2();
    }
}
