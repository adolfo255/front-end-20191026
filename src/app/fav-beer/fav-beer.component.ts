import {Component}  from '@angular/core';

@Component({
    selector: 'fav-beer',
    templateUrl: './fav-beer.component.html',
    styleUrls: ['./fav-beer.component.css']
})
export class FavBeerComponent {
    isActive: boolean=true;
    favBeerImg:string = "https://images.punkapi.com/v2/179.png";
    imgHeight: number =102;
    imgWidth: number = 398;
}