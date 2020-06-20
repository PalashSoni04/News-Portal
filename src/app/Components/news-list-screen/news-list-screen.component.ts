import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/Services/news-service/news.service';

@Component({
  selector: 'app-news-list-screen',
  templateUrl: './news-list-screen.component.html',
  styleUrls: ['./news-list-screen.component.css']
})
export class NewsListScreenComponent implements OnInit {

  newsList : any = [];

  constructor( private newsService : NewsService ) {  }

  clickOnDelete(newsId){
    this.deleteNews(newsId);

  }

  deleteNews(newsId){
    this.newsService.deleteNews(newsId).subscribe(
      (data) => {
          this.fetchNews();
      },
      (error) => {
          console.log('Error: ', error);
      }
  );
  }

  fetchNews()
  {
    this.newsService.getNewslist().subscribe(
        //this.userService.getuserlist()
        (data) => {
           this.newsList = data;
           console.log(this.newsList);
        },

        (error) => {
          console.log('Error: ', error);
      
      }

    );
  }
  

  ngOnInit(): void {
    this.fetchNews();
  }

}
