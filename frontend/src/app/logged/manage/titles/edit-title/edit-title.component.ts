import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Router, ActivatedRoute } from '@angular/router';
import { TitleService } from '../../../../shared/services/title.service';
import { Title } from '../../../../shared/interfaces/title';

@Component({
  selector: 'app-edit-title',
  templateUrl: './edit-title.component.html',
  styleUrls: ['./edit-title.component.css']
})

export class EditTitleComponent implements OnInit {
  moduleTitle = 'Manage title';
  moduleSubTitle = 'Edit title';
  public titleForm: FormGroup;
  public titleId: any;
  public title: Title;
  private titleData: any;

  constructor(
    private formBuilder: FormBuilder,
    private titleService: TitleService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private ngxService: NgxUiLoaderService
    ) {
      this.titleId = activatedRoute.snapshot.params['id'];
      this.initializeTitleForm();
      this.getTitle(this.titleId);
     }

  getTitle(titleId) {
    this.titleService.getTitle(titleId).then((result) => {
      this.title = result as Title;
      this.initializeTitleForm();
    }, (error) => {
      console.log(error);
    });
  }

  editTitle() {
    const data  = this.titleForm.value;
    this.titleData = {
      title: data.title,
    };

    this.titleService.editTitle(this.titleId, this.titleData).then((result) => {
      this.router.navigate(['/manage/titles/']);
    }, (error) => {
      console.log(error);
    });
  }

  initializeTitleForm() {
    if (this.title == null) {
      this.title = new Title();
      this.title.title = null;
    }
    this.titleForm = this.formBuilder.group({
      title: [this.title.title, Validators.compose([Validators.required])],
    });
  }

  ngOnInit() {
  }

}
