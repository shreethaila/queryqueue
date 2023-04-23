import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-answerpage',
  templateUrl: './answerpage.component.html',
  styleUrls: ['./answerpage.component.css']
})

export class AnswerpageComponent implements OnInit{
  
  ans="";
  qid=0;
  constructor(private http: HttpClient,private router: ActivatedRoute,private r:Router){

  }
  ngOnInit(): void {
    this.router.params.subscribe((params)=>{
      console.log(params);
      this.qid=params['id'];
    })  
  }
  submitForm() {
    
    const body = {
      answer: this.ans,
      qid: this.qid,
      like: 0,
      unlike:0
    };
    console.log(this.ans);
    console.log(this.qid);

    this.http.post('http://localhost:8080/iwtprojectapi/ans', body).subscribe(response => {
      console.log('API response:', response);
    });
    this.r.navigate(['/page/'+this.qid]);
    
  }
}
