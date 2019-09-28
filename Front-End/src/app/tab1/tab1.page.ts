import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll, IonCard } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
	selector: 'app-tab1',
	templateUrl: 'tab1.page.html',
	styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

	dataList:any;

	router: Router;

	constructor(private http: HttpClient) {
		this.http.get('http://127.0.0.1:8000/articles').subscribe(response => {
	    	console.log(response);

			this.dataList = response;
		})
	}

	createCard(title, timestamp, body, journal){
		var newCard = {
			subtitle : journal,
			title : timestamp,
			content : body,
		};
		this.dataList.push(newCard);
	}

	openArticle(){
		this.router.navigate(['article']);
	}
}

