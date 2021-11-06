import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Item } from 'src/app/models/item.model';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-update',
  templateUrl: './item-update.component.html',
  styleUrls: ['./item-update.component.scss']
})
export class ItemUpdateComponent implements OnInit {

  item!: Item;
  private id?: number;

  constructor(
    private formBuilder: FormBuilder,
    private itemService: ItemService,
    private router: Router,
    private route: ActivatedRoute) {
  }

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

  updateItem(): void {
    console.log(this.item);
    this.itemService.update(this.item).subscribe(() => {
      this.itemService.showMessage('Item atualizado com sucesso!')
      this.router.navigate(['admin/item']);
    })
  }

  cancel(): void {
    this.router.navigate(['admin/item']);
  }

}
