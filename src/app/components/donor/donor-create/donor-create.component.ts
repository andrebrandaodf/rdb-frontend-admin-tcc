import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AddressService } from 'src/app/services/address.service';
import { Address } from 'src/app/models/address.model';
import { Donor } from 'src/app/models/donor.model';
import { DonorService } from 'src/app/services/donor.service';

@Component({
  selector: 'app-donor-create',
  templateUrl: './donor-create.component.html',
  styleUrls: ['./donor-create.component.scss']
})
export class DonorCreateComponent implements OnInit {
  address!: Address;
  donor: Donor = {
    name: '',
    surname:'',
    address: {
      cep: '',
      logradouro: '',
      bairro: '',
      localidade: '',
      uf: '',
      complemento: ''
    },
    phone: '',
    email: ''
  }

  constructor(private donorService: DonorService, private addressService: AddressService, private router: Router) {

  }

  ngOnInit(): void {
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

  createDonor(): void {
    this.donorService.create(this.donor).subscribe(() => {
      this.addressService.create(this.address)
      this.donorService.showMessage('Doador cadastrado!')
      this.router.navigate(['admin/doador'])
    })
  }

  cancel(): void {
    this.router.navigate(['admin/doador'])
  }
}
