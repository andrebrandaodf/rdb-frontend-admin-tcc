
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-donor-crud',
  templateUrl: './donor-crud.component.html',
  styleUrls: ['./donor-crud.component.scss'],
})
export class DonorCrudComponent implements OnInit {
  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Doadores',
      icon: 'storefront',
      routeUrl: '/donor',
    };
  }

  ngOnInit(): void { }

  navigateToDonorCreate(): void {
    this.router.navigate(['admin/donor/create']);
  }
}
