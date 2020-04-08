import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public search:string;
  constructor(
    private _router:Router
  ) {}

  ngOnInit(): void {
  }

  submit() {

    this._router.navigate(['/buscar/' + this.search]);

  }

}
