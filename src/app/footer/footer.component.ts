import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  @Input() darkMode: boolean = false;
  constructor( private http: HttpClient) { }
  data!:any;
  name!:String;

  getLocal2() {
    let url2='assets/data/content.json';
    this.http.get(url2).subscribe((res) => {
      this.data = res;
      this.name = this.data.name;
      });
    }

    ngOnInit() {
      this.getLocal2();
    }
}
