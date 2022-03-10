import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Departement } from 'src/Models/Departement';
import { Region } from 'src/Models/Region';
import { ApiGouvRequestService } from 'src/Services/api-gouv-request.service';

@Component({
  selector: 'app-departement-region',
  templateUrl: './departement-region.component.html',
  styleUrls: ['./departement-region.component.scss']
})
export class DepartementRegionComponent implements OnInit {

  public codeSlug: string | undefined;
  public departementArray: Departement[] = [];

  constructor(private activatedRoute: ActivatedRoute, private apiGouvRequest: ApiGouvRequestService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((myParam)=> {
      this.codeSlug = myParam['code'];
      console.log(this.codeSlug);
      if (this.codeSlug) {
        this.apiGouvRequest.getDepartmentByRegion(this.codeSlug).subscribe((jsonResponse)=> {
          this.departementArray = jsonResponse;
          console.log(this.departementArray);
        })
      }
    });
  }

}
