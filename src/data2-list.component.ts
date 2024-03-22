import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-data2',
  templateUrl: './data2-list.component.html',
  styleUrls: ['./data2-list.component.scss'],
  imports: [
    AsyncPipe
  ],
  standalone: true
})
export class Data2ListComponent implements OnInit {
  public data: any[] = [];
  test$ = this.dataService.getData2();

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
      this.dataService.getData2().subscribe((data) => {
          this.data = data;
      });
  }
}