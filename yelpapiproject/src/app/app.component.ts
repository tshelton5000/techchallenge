import { Component } from '@angular/core';
import { YelpapiService } from './yelpapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private yelp: YelpapiService){}

  testStoreData(){
    this.yelp.testApi()
      .subscribe(res => console.log(res))
  }
}
