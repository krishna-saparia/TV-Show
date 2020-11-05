import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'TV-Show';

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  async fetchData(){
    const search = $('#txtName').val();
    const showDetails = await $.ajax(`http://api.tvmaze.com/singlesearch/shows?q= ${search}`);
    console.log(showDetails);
    if (search === showDetails.name.toLowerCase() || search === showDetails.name.toUpperCase()) {
      this.showData(showDetails.name, showDetails.summary, showDetails.image.original);
    } else {
      alert('The show which are you looking for either not available or check your spelling ');
    }
  }


  // tslint:disable-next-line:typedef
    showData(name, summary, imgUrl){
      // get main
      const main = document.getElementById('main');

      // create tags
      const header = document.createElement('h1');
      const img = document.createElement('img');
      const summaryTag = document.createElement('div');

      // add data
      header.appendChild(document.createTextNode(name));
      // header.appendChild(headText)
      img.setAttribute('src', imgUrl);
      img.setAttribute('width', '258');
      summaryTag.innerHTML = summary;

      // add to page
      main.appendChild(header);
      main.appendChild(img);
      // main.appendChild(summaryTag)
      main.innerHTML += summary;
    }

}
