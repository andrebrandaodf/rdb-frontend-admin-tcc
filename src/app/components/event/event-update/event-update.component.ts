import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Event } from 'src/app/models/event.model';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-update',
  templateUrl: './event-update.component.html',
  styleUrls: ['./event-update.component.scss']
})
export class EventUpdateComponent implements OnInit {

  event!: Event;
  private id?: number;

  constructor(
    private formBuilder: FormBuilder,
    private eventService: EventService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(getParam => {
      this.eventService.readById(getParam.id).subscribe((event: any) => {
        this.event = event;
      });
      this.id = getParam.id;
    }, erro => {
      console.log('Erro ao pegar ID', erro);
    });
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

  updateEvent(): void {
    console.log(this.event);
    this.eventService.update(this.event).subscribe(() => {
      this.eventService.showMessage('Evento atualizado com sucesso!')
      this.router.navigate(['admin/event']);
    })
  }

  cancel(): void {
    this.router.navigate(['admin/event']);
  }

}
