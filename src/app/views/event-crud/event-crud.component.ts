
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-event-crud',
  templateUrl: './event-crud.component.html',
  styleUrls: ['./event-crud.component.scss'],
})
export class EventCrudComponent implements OnInit {
  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Eventos',
      icon: 'storefront',
      routeUrl: '/event',
    };
  }

  ngOnInit(): void { }

  navigateToDonorCreate(): void {
    this.router.navigate(['admin/event/create']);
  }
}
