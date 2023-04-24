import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-btn-login-logout',
  templateUrl: './btn-login-logout.component.html',
  styleUrls: ['./btn-login-logout.component.css']
})
export class BtnLoginLogoutComponent implements OnInit {

  @Input() text: string = "";
  @Input() color: string = "";
  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.btnClick.emit();
  }

}
