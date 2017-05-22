import { Component, OnInit } from '@angular/core';
import { SetupService } from './setup.service';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {
  position: any;
  detailsModel: any = {};
  constructor(private setupService: SetupService) { }

  ngOnInit() {

    // check for Geolocation support
    if (navigator.geolocation) {
      console.log('Geolocation is supported!');
    }
    else {
      console.log('Geolocation is not supported for this Browser/OS.');
    }

    navigator.geolocation.getCurrentPosition((position: any) => {
      this.position = position.coords;
      console.log(this.position);
    }, (error) => {
      console.log(error);
    });
  }
  onSubmit() {
    debugger
    this.setupService.setup(this.detailsModel).subscribe(function (setupResult) {

    }, function (error) {

      //this.router.navigateByUrl('setup', { skipLocationChange: true });
    });
  }
  save() {
    debugger

  }
}
