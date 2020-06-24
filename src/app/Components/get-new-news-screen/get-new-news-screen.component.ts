import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/Services/news-service/news.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-get-new-news-screen',
    templateUrl: './get-new-news-screen.component.html',
    styleUrls: ['./get-new-news-screen.component.css'],
})
export class GetNewNewsScreenComponent implements OnInit {
    newsList: any = [];
    newNews = {
        newsTitle: '',
        publisher: '',
        newsDiscription: '',
        image: '',
        status: '',
    };

    fetchNews() {
        this.newsService.getNewsList().subscribe(
            (data) => {
                this.newsList = data;
                console.log(this.newsList);
            },

            (error) => {
                console.log('Error: ', error);
            }
        );
    }

    functionOnSubmit() {
        console.log('functionOnSubmit', this.newNews);
        this.newsService.createNewNews(this.newNews).subscribe(
            (data) => {
                this.newNews = {
                    newsTitle: '',
                    publisher: '',
                    newsDiscription: '',
                    image: '',
                    status: '',
                };
                this.fetchNews();
                this.router.navigate(['/newslist']);
            },
            (error) => {
                console.log('Error: ', error);
            }
        );
    }

    constructor(private router: Router, config: NgbModalConfig, private modalService: NgbModal, private newsService: NewsService) {}

    ngOnInit(): void {}
}
