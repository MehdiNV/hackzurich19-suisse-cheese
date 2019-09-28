import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}


  public grabSearch(){
  	let currency = ('NaN' || this.currencySelection);
  	let country = ('NaN' || this.countrySelection);
  	let sector = ('NaN' || this.sectorSelection);
  	let topic = ('NaN' || this.topicSelection);


  	this.http.get('127.0.0.1:8000/articles').map(res => res.json()).subscribe(data => {
    	console.log(data);
    	
    }


  }
}
