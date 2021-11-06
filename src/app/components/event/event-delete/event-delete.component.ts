import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/models/event.model';
import { EventService } from 'src/app/services/event.service';



@Component({
  selector: 'app-event-delete',
  templateUrl: './event-delete.component.html',
  styleUrls: ['./event-delete.component.scss']
})
export class EventDeleteComponent implements OnInit {

  event!: Event;
  private id!: number;

  constructor(
    private eventService: EventService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

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

  deleteEvent(): void {
    this.eventService.delete(this.id).subscribe(() => {
      this.eventService.showMessage('Evento deletado com sucesso!');
      this.router.navigate(['admin/event']);
    }, errow => {
      this.eventService.showMessage(`Erro na solicitação: ${errow}`);
    })
  }

  cancel(): void {
    this.router.navigate(['admin/event']);
  }

}
