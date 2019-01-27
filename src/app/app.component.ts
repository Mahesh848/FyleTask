import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  title = 'Fyletask';
  public navitem = 1;

  ngOnInit() {
    $(document).ready(function() {
      $('.fa-bars').click(function() {
        $('header').toggleClass('shown');
        console.log($('header'));
      });
    });
  }

  changeNavitem(navitem) {
    this.navitem = navitem;
  }
}
