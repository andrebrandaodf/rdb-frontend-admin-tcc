import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Donor } from 'src/app/models/donor.model';
import { DonorService } from 'src/app/services/donor.service';



@Component({
  selector: 'app-donor-delete',
  templateUrl: './donor-delete.component.html',
  styleUrls: ['./donor-delete.component.scss']
})
export class DonorDeleteComponent implements OnInit {

  donor!: Donor;
  private id!: number;

  constructor(
    private donorService: DonorService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(getParam => {
      this.donorService.readById(getParam.id).subscribe((donor: any) => {
        this.donor = donor;
      });
      this.id = getParam.id;
    }, erro => {
      console.log('Erro ao pegar ID', erro);
    });
  }

  deleteDonor(): void {
    this.donorService.delete(this.id).subscribe(() => {
      this.donorService.showMessage('Doador deletado com sucesso!');
      this.router.navigate(['admin/donor']);
    }, errow => {
      this.donorService.showMessage(`Erro na solicitação: ${errow}`);
    })
  }

  cancel(): void {
    this.router.navigate(['admin/donor']);
  }

}
