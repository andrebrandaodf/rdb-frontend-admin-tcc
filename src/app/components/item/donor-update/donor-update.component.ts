import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Donor } from 'src/app/models/donor.model';
import { DonorService } from 'src/app/services/donor.service';

@Component({
  selector: 'app-donor-update',
  templateUrl: './donor-update.component.html',
  styleUrls: ['./donor-update.component.scss']
})
export class DonorUpdateComponent implements OnInit {

  donor!: Donor;
  private id?: number;

  constructor(
    private formBuilder: FormBuilder,
    private donorService: DonorService,
    private router: Router,
    private route: ActivatedRoute) {
  }

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
  getCep(event: any) {
    let cep = (event.target as HTMLInputElement).value;
    let cepOnlyNumber = Number(cep.replace(/[^0-9]/g, ''));
    this.donorService.getCep(cepOnlyNumber).subscribe((resp: any) => {
      this.donor.address = resp;
      console.log(resp);
    }
    );
  }

  updateDonor(): void {
    console.log(this.donor);
    this.donorService.update(this.donor).subscribe(() => {
      this.donorService.showMessage('Doador atualizado com sucesso!')
      this.router.navigate(['admin/donor']);
    })
  }

  cancel(): void {
    this.router.navigate(['admin/donor']);
  }

}
