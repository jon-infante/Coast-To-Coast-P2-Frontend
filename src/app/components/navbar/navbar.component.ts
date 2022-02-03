import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  goToHome(): void{
    this.router.navigate(['home'])
  }

  goToCategories(): void
  {
    this.router.navigate(['categories']);
  }
  
  ngOnInit(): void {
  }

}
