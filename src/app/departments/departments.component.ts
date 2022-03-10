import { Component, Input, OnInit } from '@angular/core';
import { Departement } from 'src/Models/Departement';
import { ApiGouvRequestService } from 'src/Services/api-gouv-request.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {

  allDepartments: Departement[] = [];

  constructor(private apiGouvRequest: ApiGouvRequestService) { }

  ngOnInit(): void {
    this.apiGouvRequest.getDepartments().subscribe((json)=>{
      this.allDepartments = json;
    });
  }

}
