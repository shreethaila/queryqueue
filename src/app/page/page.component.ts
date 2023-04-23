import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit{
  responseData: any;
  ansdata: any;
  res:any;
  constructor(private http: HttpClient,private router: ActivatedRoute){

  }
  ngOnInit(): void {
    
    this.router.params.subscribe((params)=>{
      console.log(params);
      if (params['id']){
        this.http.get('http://localhost:8080/iwtprojectapi/qn?id='+params['id']).subscribe(data => {
        console.log(data);
        this.responseData = data;
      });
      this.http.get('http://localhost:8080/iwtprojectapi/ans?id='+params['id']).subscribe(data => {
        console.log(data);
        this.ansdata = data;
      });
      }
    })
    
  }
  qnincrementLikes(id:number){
    this.http.put('http://localhost:8080/iwtprojectapi/qn?type=like&id='+id,{}).subscribe(data => {
        console.log(data);
        this.res=data;
        const likeButton = document.getElementById('2');
        if (likeButton) {
          likeButton.innerHTML = '👍 '+this.res.like;
        }
    });
    
  }
  qndecrementLikes(id:number){
    this.http.put('http://localhost:8080/iwtprojectapi/qn?type=unlike&id='+id,{}).subscribe(data => {
        console.log(data);
        this.res=data;
        const likeButton = document.getElementById('1');
        if (likeButton) {
          likeButton.innerHTML = '👎 '+this.res.unlike;
        }
    });

  }
  ansincrementLikes(id:number){
    this.http.put('http://localhost:8080/iwtprojectapi/ans?type=like&id='+id,{}).subscribe(data => {
        console.log(data);
        this.res=data;
        const likeButton = document.getElementById('4');
        if (likeButton) {
          likeButton.innerHTML = '👍 '+this.res.like;
        }
    });
    
  }
  ansdecrementLikes(id:number){
    this.http.put('http://localhost:8080/iwtprojectapi/ans?type=unlike&id='+id,{}).subscribe(data => {
        console.log(data);
        this.res=data;
        const likeButton = document.getElementById('3');
        if (likeButton) {
          likeButton.innerHTML = '👎 '+this.res.unlike;
        }
    });

  }
}
