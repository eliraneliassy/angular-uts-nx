import { Component, OnInit } from '@angular/core';
import { ComponentHarness } from '@angular/cdk/testing';

@Component({
  selector: 'angular-uts-workshop-nx-my-switch',
  templateUrl: './my-switch.component.html',
  styleUrls: ['./my-switch.component.scss'],
})
export class MySwitchComponent extends ComponentHarness {
  static hostSelector = 'switch';
}
