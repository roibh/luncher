import { Component, OnInit } from '@angular/core';
import { SetupService } from './setup/setup.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private setupService: SetupService) {

  }

  ngOnInit() {
    this.setupService.validate().subscribe((validationResult: any) => {
      this.needSetup = true;
    }, (error) => {
      this.needSetup = true;
      //this.router.navigateByUrl('setup', { skipLocationChange: true });
    });
  }
  needSetup: boolean = false;
  title = 'app works!';
  Pin: string = '';
  Type(value) {
    this.Pin = this.Pin + value;

  }
  Backspace() {
    this.Pin = this.Pin.substr(0, this.Pin.length - 1);
  }
}
