import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.css']
})
export class HeaderHomeComponent implements OnInit {

  check: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  onOpenOrClose(check: boolean): void {
    this.check = check;
  }

}
