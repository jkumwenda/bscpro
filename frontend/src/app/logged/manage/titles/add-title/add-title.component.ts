import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '../../../../shared/interfaces/title';
import { TitleService } from '../../../../shared/services/title.service';
import { AlertService } from './../../../../shared/services/alert.service';

@Component({
  selector: 'app-add-title',
  templateUrl: './add-title.component.html',
  styleUrls: ['./add-title.component.css'],
  providers: [AlertService]
})

export class AddTitleComponent implements OnInit {
  moduleTitle = 'Manage title';
  moduleSubTitle = 'Add title';
  public titleForm: FormGroup;
  public title: Title;
  private titleData: any;
  private successMsg = '';
  message: string;

  constructor(
    private formBuilder: FormBuilder,
    private titleService: TitleService,
    private ngxService: NgxUiLoaderService,
    private router: Router,
    private alertService: AlertService
    ) { }

  addTitle() {
    const data  = this.titleForm.value;
    this.titleData = {
      title: data.title,
    };

    this.titleService.addTitle(this.titleData).then((result) => {
      this.newMessage();
      this.router.navigate(['/manage/titles']);
    }, (error) => {
    });
  }

  ngOnInit() {
    this.alertService.currentMessage.subscribe(message => this.message = message);

    this.titleForm = this.formBuilder.group({
      title: ['', Validators.compose([Validators.required])],
    });
  }

  newMessage() {
    this.alertService.dataAdded('Hello from Sibling');
  }

}
