import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private renderer: Renderer2){}

  public show:boolean = false;

  toggle() {
    this.show = !this.show;
  }
  
  ngOnInit(): void {
  }
  
}
