// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-qnpage',
//   templateUrl: './qnpage.component.html',
//   styleUrls: ['./qnpage.component.css']
// })
// export class QnpageComponent {
//   submitForm(){
//     console.log("submitted");
//   }

// }
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-qnpage',
templateUrl: './qnpage.component.html',
styleUrls: ['./qnpage.component.css']
})
export class QnpageComponent {
  title="";
  desc1="";
  desc2="";
  tags="";

  constructor(private http: HttpClient,private router: Router) {}

  submitForm() {
    const body = {
      title: this.title,
      desc1: this.desc1,
      desc2: this.desc2,
      like: 0,
      unlike:0,
      tag: this.tags
    };

    this.http.post('http://localhost:8080/iwtprojectapi/qn', body).subscribe(response => {
      console.log('API response:', response);
    });
    console.log("submitted");
      this.router.navigate(['']);
  }
}

