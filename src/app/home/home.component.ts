

// import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { ActivatedRoute } from '@angular/router';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent {
//   responseData: any;
//   searchText: any;

//   constructor(private http: HttpClient, private router: ActivatedRoute) {}

//   ngOnInit() {
//     this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe(data => {
//       console.log(data);
//       this.responseData = data;

//       this.router.params.subscribe(params => {
//         if (params['searchItem']) {
//           console.log(params['searchItem']);
//           const filteredData = this.responseData.filter((item: { title: string; }) => item.title.toLowerCase().includes(params['searchItem'].toLowerCase()));
//           this.responseData = filteredData;
//         }else if (params['tag']){
//           this.responseData=this.responseData.getbytag(params['tag'])
//         }
//       });
//     });
//   }
//   getbytag(tag:string): void{
//     if (tag=='All'){
//       this.responseData=this.responseData;
//     }else{
//       const filteredData=this.responseData.filter((item: { tags: { include: (arg0: string) => any; }; }) => item.tags?.include(tag));
//     }
//   }
// }

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  template: '<button (click)="incrementLikes()">Likes: {{likes}}</button>',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  likes = 0;


  
  responseData: any;
  searchText: any;
  ansdata:any;
  constructor(private http: HttpClient, private router: ActivatedRoute,private r:Router) {}

  ngOnInit() {
    

    this.http.get('http://localhost:8080/iwtprojectapi/qn').subscribe(data => {
      console.log(data);
      this.responseData = data;

      this.router.params.subscribe(params => {
        if (params['searchItem']) {
          console.log(params['searchItem']);
          const filteredData = this.responseData.filter((item: { title: string; }) => item.title.toLowerCase().includes(params['searchItem'].toLowerCase()));
          this.responseData = filteredData;
        } else if (params['tag']) {
          console.log(params['tag']);
          this.getByTag(params['tag']);
        }
      });
    });

  }
  incrementLikes(id: number) {
    this.http.put('http://localhost:8080/iwtprojectapi/qn?id='+id, {}).subscribe((response: any) => {
      this.likes = response.likes;
    });
  }
  getByTag(tag: string): void {
    console.log(tag);
    if (tag === 'All') {
      this.responseData = this.responseData;
    } else {
      const filteredData = this.responseData.filter((item: { tag: String }) => item.tag === tag);
      console.log(filteredData);
      this.responseData = filteredData;
    }
  }
}

function $http(arg0: { method: string; url: string; headers: { Origin: string; }; }) {
  throw new Error('Function not implemented.');
}

