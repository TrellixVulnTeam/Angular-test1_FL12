import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cod',
  templateUrl: './cod.component.html',
  styleUrls: ['./cod.component.css'],
})
export class CODComponent implements OnInit {
  constructor() {}

  valTB01 = 0;
  valTB02 = 0;
  valTB03 = 0;
  valTB04 = 0;
  valTB05 = 0;
  valTB06 = '(A) x (B) x (C) x (D)';
  valTB07 = 0;

  calcCOD() {
    this.valTB07 = this.valTB02 * this.valTB03 * this.valTB04 * this.valTB05;
  }

  ngOnInit(): void {}
}
