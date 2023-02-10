import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RocketInterface, RocketService } from 'src/app/services/rocket.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  rocket: RocketInterface;
  isUpdating: boolean = false;

  constructor(private service: RocketService,
    private router: Router) {

    var state = router.getCurrentNavigation()?.extras.state;

    if (state != null) {
      this.rocket = state['rocket'];
      this.isUpdating = true;
    } else {
      this.rocket = {
        id: 0,
        name: '',
        description: '',
        height: 0,
        country: '',
        flickr_images: []
      };
    }



  }

  ngOnInit(): void {
  }

  save() {
    console.log(this.rocket);
    if (this.isUpdating) { this.service.update(this.rocket); }
    else { this.service.add(this.rocket); }
    //this.router.navigate(['/']);
  }

  reload(){
    
    this.save();
    
    this.router.navigate(['/']);
  }

}
