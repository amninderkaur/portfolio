import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  @Input() darkMode: boolean = false;
  data!:any;
  linkedin!:String;
  constructor( private http: HttpClient) { }
  
  getLocal2() {
    let url2='assets/data/content.json';
    this.http.get(url2).subscribe((res) => {
      this.data = res;
      this.linkedin = this.data.linkedin;
      });
    }

    ngOnInit() {
      this.getLocal2();
    }
}
