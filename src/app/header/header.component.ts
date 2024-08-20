import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() darkMode: boolean = false;
  constructor( private http: HttpClient) { }
  
  data!:any;
  name!:String;
  role!:String;
  motto!:String;
  
  getLocal2() {
    let url2='assets/data/content.json';
    this.http.get(url2).subscribe((res) => {
      this.data = res;
      this.name = this.data.name;
      this.role = this.data.role;
      this.motto = this.data.motto;
      });
    }

    ngOnInit() {
      this.getLocal2();
    }
}
