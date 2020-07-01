import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: '',
  templateUrl: './personal.component.html',
})
export class GamePersonalComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigate(['/games/published']);
  }
}
