import { Component } from '@angular/core';
import { FavoritesService } from 'src/app/services/favorites.service';
import { HighlightLoader, HighlightAutoResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-text-to-json',
  templateUrl: './text-to-json.component.html',
  styleUrls: ['./text-to-json.component.scss']
})
export class TextToJsonComponent {

  isFav = false;
  item = {
    name: 'Text to JSON',
    description: 'Convert text to json format',
    category: 'Formatter',
    icon: 'assets/icons/ttj.svg',
    url: '/tools/text-to-json'
  };

  input: string = '';
  output: string = "";

  constructor(
    private favS: FavoritesService,
    private hljsLoader: HighlightLoader
  ) {
    this.isFav = Boolean(this.favS.isFavorite(this.item));
  }

  addToFav() {
    this.isFav = true;
    this.favS.addToFavorites(this.item);
  }

  /*
  test example heading 123
  aaa bbb ccc ddd
  eee fff ggg hhh
  */
  convert(){
    let converted: any;
    let i = 0;

    let exploded = this.input.split('\n');
    let header = exploded[0].split(' ');
    let rawData = this.input.split(exploded[0]);
    let data = rawData[1].split('\n');

    //unset data[0]

    data.forEach( (element) => {
      let elementParts = element.split(' ');

      let arr = {
        header: elementParts[0]
      };
      converted.push(arr);
      console.log(element);
    });

    
  }

}
