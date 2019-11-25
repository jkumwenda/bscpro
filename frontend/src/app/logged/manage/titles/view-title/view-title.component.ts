import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TitleService } from '../../../../shared/services/title.service';
import { Title } from '../../../../shared/interfaces/title';

@Component({
  selector: 'app-view-title',
  templateUrl: './view-title.component.html',
  styleUrls: ['./view-title.component.css']
})
export class ViewTitleComponent implements OnInit {
  moduleTitle = 'Manage title';
  moduleSubTitle = 'View title';
  public titleId: any;
  public title: Title;

  constructor(
    private titleService: TitleService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.titleId = activatedRoute.snapshot.params['id'];
  }

  getTitle(titleId) {
    this.titleService.getTitle(titleId).then((result) => {
      this.title = result as Title;
      console.log();
    }, (error) => {
      console.log(error);
    });
  }

  ngOnInit() {
    this.getTitle(this.titleId);
  }

}
