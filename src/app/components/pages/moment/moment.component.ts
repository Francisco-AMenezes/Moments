import { Component, OnInit } from '@angular/core';
import { Moment } from 'src/app/Moments';
import { MomentService } from 'src/app/services/moment.service';

@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.css'],
})
export class MomentComponent implements OnInit {
  moment?: Moment;

  constructor(private momentService: MomentService) {}

  ngOnInit(): void {
    //id que está na url
  }
}
