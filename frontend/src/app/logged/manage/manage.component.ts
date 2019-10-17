import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  moduleTitle = 'System Manage';
  moduleSubTitle = 'Management Functions';

  constructor() { }

  ngOnInit() {
  }

}
