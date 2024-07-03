import { Component, OnInit } from '@angular/core';
import { FetchService } from './fetch.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  jobs: any;

  constructor(private fetchService: FetchService) { }

  ngOnInit() {
    this.fetchService.getJobs().subscribe({
      next: (data) => {
        this.jobs = data.results;
      },
      error: (e) => console.error(e)
    });
  }
//  getLogoPath(){
//   return `https://img.logo.dev/${this.jobs.company[0].name}.com?token=pk_epQfRYjRSoyBCQG7QiWMAA`;
//  }
}