import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-delete',
  templateUrl: './item-delete.component.html',
  styleUrls: ['./item-delete.component.scss']
})
export class ItemDeleteComponent implements OnInit {

  item!: Item;
  private id!: number;

  constructor(
    private itemService: ItemService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(getParam => {
      this.itemService.readById(getParam.id).subscribe((item: any) => {
        this.item = item;
      });
      this.id = getParam.id;
    }, erro => {
      console.log('Erro ao pegar ID', erro);
    });
  }

  deleteItem(): void {
    this.itemService.delete(this.id).subscribe(() => {
      this.itemService.showMessage('Item deletado com sucesso!');
      this.router.navigate(['admin/item']);
    }, errow => {
      this.itemService.showMessage(`Erro na solicitação: ${errow}`);
    })
  }

  cancel(): void {
    this.router.navigate(['admin/item']);
  }

}
