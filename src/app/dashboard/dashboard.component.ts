import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dashboard:boolean=false;
  constructor() { 
    
  }

  ngOnInit(): void {
    this.dashboard=true;
  }
  goto(){
    this.dashboard=false;
  }
  gotoDashboard(){
    this.dashboard=true;
  }

}
