import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: '',
  template: '',
})
export class GameRouterComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigate(['/published']);
  }
}
