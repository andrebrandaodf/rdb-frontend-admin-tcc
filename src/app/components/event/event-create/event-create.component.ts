import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AddressService } from 'src/app/services/address.service';
import { Address } from 'src/app/models/address.model';
import { Item } from 'src/app/models/item.model';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/models/event.model';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.scss']
})
export class EventCreateComponent implements OnInit {
  address!: Address;
  item!: Item;

  event: Event = {
    name: '',
    description:'',
    photograph:'',
    address: {
      cep: '',
      logradouro: '',
      bairro: '',
      localidade: '',
      uf: '',
      complemento: ''
    },
    status: false,
    startDate: new Date,
    endDate: new Date
  }

  constructor(private eventService: EventService, private addressService: AddressService, private router: Router) {

  }

  ngOnInit(): void {
  }

  getCep(event: any) {
    let cep = (event.target as HTMLInputElement).value;
    let cepOnlyNumber = Number(cep.replace(/[^0-9]/g, ''));
    this.eventService.getCep(cepOnlyNumber).subscribe((resp: any) => {
      this.event.address = resp;
      console.log(resp);
    }
    );
  }

  createEvent(): void {
    this.eventService.create(this.event).subscribe(() => {
      this.addressService.create(this.address)
      this.eventService.showMessage('Evento cadastrado!')
      this.router.navigate(['admin/event'])
    })
  }

  cancel(): void {
    this.router.navigate(['admin/event'])
  }
}
