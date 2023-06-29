import { Component, OnInit } from '@angular/core';
import { AirlineService } from 'src/app/services/airline.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-airline-deetails',
  templateUrl: './airline-deetails.component.html',
  styleUrls: ['./airline-deetails.component.scss'],
})
export class AirlineDeetailsComponent implements OnInit {
  public airlineData: any;
  constructor(
    private airlineService: AirlineService,
    private ngxUiLoaderService: NgxUiLoaderService
  ) {}

  ngOnInit(): void {
    this.airlineDetails();
  }

  private airlineDetails() {
    this.ngxUiLoaderService.start();
    this.airlineService.getAirlineDetails().subscribe({
      next: (res: any) => {
        console.log('res', res);
        this.airlineData = res;
        this.ngxUiLoaderService.stop();
      },
      error: (err: any) => {
        console.log('err', err);
      },
    });
  }
}
