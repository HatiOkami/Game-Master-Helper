import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: '',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit{
  constructor(private route: ActivatedRoute) {}

  ngOnInit(){
    const a = 1;
  }
}
