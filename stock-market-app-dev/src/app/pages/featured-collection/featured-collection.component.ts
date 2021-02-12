import { Component, OnInit } from '@angular/core';
import { HttpClientService } from 'src/app/services/http-client.service';

@Component({
  selector: 'app-featured-collection',
  templateUrl: './featured-collection.component.html',
  styleUrls: ['./featured-collection.component.css']
})
export class FeaturedCollectionComponent implements OnInit {
  
  featuredCollectionsRow1: any;
  featuredCollectionsRow2: any;
  
  constructor(private Http: HttpClientService) { }

  ngOnInit() {
    this.Http.getJSONData().subscribe(res => {
      this.featuredCollectionsRow1 = res.featuredCollectionsRow1;
      this.featuredCollectionsRow2 = res.featuredCollectionsRow2;
    });
  }

}
