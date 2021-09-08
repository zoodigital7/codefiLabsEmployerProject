import { Component, OnDestroy, OnInit } from '@angular/core';
import * as Rellax from 'rellax';

@Component({
  selector: 'app-hodlit',
  templateUrl: './hodlit.component.html',
  styleUrls: ['./hodlit.component.scss']
})
export class HodlitComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    var rellaxHeader = new Rellax('.rellax-header');
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('blog-post');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
  }

  ngOnDestroy() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('blog-post');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }

}



