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
    /*this.renderResult(showDetails.name);*/
  }


  // tslint:disable-next-line:typedef
    showData(name, summary, imgUrl){
      // get main
      const main = document.getElementById('main');

      // create tags
      const header = document.createElement('h1');
      const img = document.createElement('img');
      const summaryTag = document.createElement('div');
      const Ulist = document.createElement('ul');
      const oList = document.createElement('li');

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

  // tslint:disable-next-line:typedef
    renderResult(results){
      const list = document.getElementById('txtName');
      list.innerHTML = '';
      results.forEach(result => {
        const element = document.createElement('li');
        element.innerText = result;
        list.appendChild(element);
      });
    }




}
