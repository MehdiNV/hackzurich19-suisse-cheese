import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll, IonCard } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  @ViewChild(IonInfiniteScroll, {static: false}) infiniteScroll: IonInfiniteScroll;

  dataList:any;

  router: Router;
  
  constructor() {
    this.dataList = [{
      subtitle : 'New York Times',
      title : 'Google smartphone OS Android banned for Huawei',
      content : 'Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.'
    },
    {
      subtitle : 'Dow Jones',
      title : 'US government increasing defense budget by 10%',
      content : 'Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.'
    },
    {
      subtitle : 'New York Times',
      title : 'Google smartphone OS Android banned for Huawei',
      content : 'Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.'
    },
    {
      subtitle : 'New York Times',
      title : 'Google smartphone OS Android banned for Huawei',
      content : 'Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.'
    },
    {
      subtitle : 'New York Times',
      title : 'Google smartphone OS Android banned for Huawei',
      content : 'Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.'
    }
  ];

  }
  
  loadData(event) {
    
    setTimeout(() => {
      console.log('Done');
      for (let i = 0; i < 5; i++) {
       this.createCard('New York Times', 'Google smartphone OS Android banned for Huawei', 'Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.');
      }
      event.target.complete();
 
      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.dataList.length == 30) {
        event.target.disabled = true;
      }
    }, 500);
  }
  
  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
 
  createCard(userSubtitle, userTitle, userContent){
    var newCard = {
      subtitle : userSubtitle,
      title : userTitle,
      content : userContent
    };
    this.dataList.push(newCard);
  }
  
  openArticle(){
    this.router.navigate(['article']);
  }
}
