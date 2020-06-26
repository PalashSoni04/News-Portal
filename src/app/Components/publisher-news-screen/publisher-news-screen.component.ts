import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/Services/news-service/news.service';

@Component({
    selector: 'app-publisher-news-screen',
    templateUrl: './publisher-news-screen.component.html',
    styleUrls: ['./publisher-news-screen.component.css'],
})
export class PublisherNewsScreenComponent implements OnInit {
    newsList: any = [];

    constructor(private newsService: NewsService) {}

    clickOnDelete(newsId) {
        this.deleteNews(newsId);
    }

    deleteNews(newsId) {
        this.newsService.deleteNews(newsId).subscribe(
            (data) => {
                this.fetchNews();
            },
            (error) => {
                console.log('Error: ', error);
            }
        );
    }

    clickOnUpdateStatus(newsId, status) {
        this.updateStatus(newsId, status);
    }

    updateStatus(newsId, status) {
        this.newsService.updateStatus(newsId, status).subscribe(
            (data) => {
                this.fetchNews();
            },
            (error) => {
                console.log('Error: ', error);
            }
        );
    }

    fetchNews() {
        this.newsService.getNewsList().subscribe(
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
