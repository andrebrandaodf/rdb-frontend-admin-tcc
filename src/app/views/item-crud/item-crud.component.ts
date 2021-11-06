
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-item-crud',
  templateUrl: './item-crud.component.html',
  styleUrls: ['./item-crud.component.scss'],
})
export class ItemCrudComponent implements OnInit {
  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Itens',
      icon: 'storefront',
      routeUrl: '/item',
    };
  }

  ngOnInit(): void { }

  navigateToItemCreate(): void {
    this.router.navigate(['admin/item/create']);
  }
}
