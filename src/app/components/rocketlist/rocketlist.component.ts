import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RocketService, RocketInterface } from 'src/app/services/rocket.service';

@Component({
  selector: 'rocketlist',
  templateUrl: './rocketlist.component.html',
  styleUrls: ['./rocketlist.component.css']
})
export class RocketlistComponent implements OnInit {
  rockets: Array<RocketInterface>;

  constructor(private service: RocketService,
    private router: Router) {
    this.rockets = [];
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.rockets = [];
    this.service.load()?.subscribe(rockets => this.rockets = rockets);
  }

  update(event: any){
    this.router.navigateByUrl('/create', {
      state: {rocket: event}
  });
  }

  delete(event: any){
    this.service.remove(event).subscribe(res => {

      this.getAll();
    });
  }
  

}
