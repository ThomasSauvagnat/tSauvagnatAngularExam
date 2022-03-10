import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Commune } from 'src/Models/Commune';
import { ApiGouvRequestService } from 'src/Services/api-gouv-request.service';

@Component({
  selector: 'app-communes-departement',
  templateUrl: './communes-departement.component.html',
  styleUrls: ['./communes-departement.component.scss']
})
export class CommunesDepartementComponent implements OnInit {

  public codeDpt: string|undefined;
  public communes: Commune[] = [];

  constructor(private activatedRoute: ActivatedRoute, private apiGouvRequest: ApiGouvRequestService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((myParam)=> {
      this.codeDpt = myParam['codeDpt'];
      console.log(this.codeDpt);
      if (this.codeDpt) {
        this.apiGouvRequest.getCommunesByDepartment(this.codeDpt).subscribe((jsonResponse) => {
          this.communes = jsonResponse;
          console.log(this.communes);
        });
      }
    });
  }

}
