import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-data1',
  templateUrl: './data1-list.component.html',
  styleUrls: ['./data1-list.component.scss'],
  imports:[
    AsyncPipe
  ],
  standalone: true
})
export class Data1ListComponent implements OnInit {
  public data: any[] = [];
  test$ = this.dataService.getData();

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
      this.dataService.getData().subscribe((data) => {
        this.data = data;
      });
  }
}