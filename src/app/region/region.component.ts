import { Component, OnInit } from '@angular/core';
import { Departement } from 'src/Models/Departement';
import { Region } from 'src/Models/Region';
import { ApiGouvRequestService } from 'src/Services/api-gouv-request.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent implements OnInit {

  public regions: Region[] = [];
  public myDepartments: Departement[] = [];

  constructor(private apiGouvRequest: ApiGouvRequestService) { }

  ngOnInit(): void {
    this.apiGouvRequest.getRegions().subscribe((jsonResponse)=> {
      this.regions = jsonResponse;
      console.log(this.regions);
      for (let department of this.regions) {
        this.apiGouvRequest.getDepartmentByRegion(department.code).subscribe((jsonResponse)=> {
        this.myDepartments = jsonResponse;
        console.log(this.myDepartments);
        })
      }
    });

  }

}
