import { Component } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private http: HttpClient) {}


  public grabSearch(){
	let currency = ('NaN' || this.currencySelection);
  	let country = ('NaN' || this.countrySelection);
  	let sector = ('NaN' || this.sectorSelection);
  	let topic = ('NaN' || this.topicSelection);

  	this.http.get('http://127.0.0.1:8000/articles').subscribe(data => {
    	console.log(data);
		})
	}
}
