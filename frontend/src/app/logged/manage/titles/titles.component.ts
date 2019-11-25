import { AlertService } from './../../../shared/services/alert.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '../../../shared/interfaces/title';
import { TitleService } from '../../../shared/services/title.service';

@Component({
  selector: 'app-titles',
  templateUrl: './titles.component.html',
  styleUrls: ['./titles.component.css']
})
export class TitlesComponent implements OnInit {
  moduleTitle = 'Manage titles';
  moduleSubTitle = 'List of titles';
  public titles: Title[];
  public title: Title;
  diagtitle = 'angular-confirmation-dialog';
  message: string;

  constructor(
    private titleService: TitleService,
    private alertService: AlertService,
    private router: Router,
    ) {}

  getTitles() {
    this.titleService.getTitles().then((result) => {
      this.titles = result as Title[];
    }, (error) => {
    });
  }

  viewTitle(titleId) {
    this.router.navigate(['/manage/titles/view-title', titleId]);
  }

  editTitle(titleId) {
    this.router.navigate(['/manage/titles/edit-title', titleId]);
  }

  deleteTitle(titleId) {
    this.titleService.deleteTitle(titleId).then((result) => {
      this.getTitles();
    }, (error) => {
    });
  }

  ngOnInit() {
    console.log(this.alertService.currentMessage.subscribe(message => this.message = message));
    this.getTitles();
  }

}
