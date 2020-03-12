import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  constructor(private el :ElementRef) { }

  ngOnInit() {
  }

  open() {
    let myTag = this.el.nativeElement.querySelector(".fixed-sidebar");
    myTag.classList.add('open'); 
   }
   close() {
    let myTag = this.el.nativeElement.querySelector(".fixed-sidebar");
    myTag.classList.remove('open'); 
   }
}
