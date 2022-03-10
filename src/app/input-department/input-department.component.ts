import { Component, Input, OnInit } from '@angular/core';
import { Departement } from 'src/Models/Departement';

@Component({
  selector: 'app-input-department',
  templateUrl: './input-department.component.html',
  styleUrls: ['./input-department.component.scss']
})
export class InputDepartmentComponent implements OnInit {
  @Input()
  departements: Departement|undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
