import { Component } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  currencySelection: string = "";
  countrySelection: string = "";
  sectorSelection: string = "";
  topicSelection: string = "";

  constructor(private http: HttpClient) {}

  public grabSearch(){

    // Grabs some of the filters that the user can pick from the website
    // If the user didn't select a value in a respective filter, then we set the...
    // ...value as NaN, else it'll be as the value that the user has selected
	  var currencyVal = this.currencySelection;
    var countryVal = this.countrySelection;
	  var sectorVal = this.sectorSelection;
    var topicVal = this.topicSelection;

    if (!(currencyVal)){
      currencyVal = 'NaN'
    } else if (!(countryVal)){
      countryVal = 'NaN'
    } else if (!(sectorVal)){
      sectorVal = 'NaN'
    } else if (!(topicVal)){
      topicVal = 'NaN'
    }

    alert (currencyVal)

    // TODO: A POST request here that sends the filter data/tags to the backend

  	this.http.get('http://127.0.0.1:8000/articles').subscribe(data => {
    	console.log(data);
		})

	}


}
