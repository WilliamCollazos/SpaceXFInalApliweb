import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { RocketInterface, RocketService } from 'src/app/services/rocket.service';

@Component({
  selector: 'rocket',
  templateUrl: './rocket.component.html',
  styleUrls: ['./rocket.component.css']
})
export class RocketComponent implements OnInit {
  @Input()
  rocket: any;

  @Output()
  onUpdate = new EventEmitter<any>();

  @Output()
  onDelete = new EventEmitter<any>();

  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }

  isPositive() {
    return (this.rocket && this.rocket.height > 50);
  }

  isNegative() {
    return (this.rocket && this.rocket.height < 50);
  }

  
  update(){
    this.onUpdate.emit(this.rocket);
   
  }

  delete(){
    this.onDelete.emit(this.rocket);
    
  }

}
