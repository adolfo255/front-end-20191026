import {Component} from '@angular/core';

@Component({

selector: 'beer-list',
styleUrls: ['./beer-list.component.css'],
templateUrl:'./beer-list.component.html'

})
export class BeerListComponent{
    beers: any[] =  [
        {
            "img":"https://images.punkapi.com/v2/33.png",
            "title":"Sorachi Ace",
            "text":"A hop that tastes of bubble gum? Seriously? ",
            "price": 207
        },
        {
            "img":"https://images.punkapi.com/v2/keg.png",
            "title": "Orange Blossom - B-Sides",
            "text": "Orange blossom honey braggot. A floral",
            "price":142
        }

    ];

}