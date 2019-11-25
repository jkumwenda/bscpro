import { Injectable } from '@angular/core';
import { CommonService } from '../services/common.service';
import { resolve } from 'q';

@Injectable({
  providedIn: 'root',
})
export class TitleService {
  public token: any;
  public endpoint: any = 'api/title/';

  constructor(private commonService: CommonService) {
  }

  addTitle(data) {
    return new Promise((resolve, reject) => {
      this.commonService.post(this.endpoint, data).then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  getTitles() {
    return new Promise((resolve, reject) => {
      this.commonService.get(this.endpoint).then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  getTitle(titleId) {
    return new Promise((resolve, reject) => {
      this.commonService.get(this.endpoint + titleId + '/').then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  editTitle(titleId, data) {
    return new Promise((resolve, reject) => {
      this.commonService.update(this.endpoint + titleId + '/', data).then((result) => {
        resolve(true);
      }, (error) => {
        reject(false);
      });
    });
  }

  deleteTitle(titleId) {
    return new Promise((resolve, reject) => {
      this.commonService.delete(this.endpoint + titleId + '/').then((result) => {
        resolve(true);
      }, (error) => {
        reject(false);
      });
    });
  }
}
