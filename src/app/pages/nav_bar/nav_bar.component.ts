import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav_bar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav_bar.component.html',
  styleUrls: ['./nav_bar.component.css']
})
export class Nav_barComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}