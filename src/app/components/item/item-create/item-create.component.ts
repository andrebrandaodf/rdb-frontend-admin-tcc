import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.scss']
})
export class ItemCreateComponent implements OnInit {

  item: Item = {
    name: '',
    category:'', 
    description:'',
  }

  constructor(private itemService: ItemService, private router: Router) {

  }

  ngOnInit(): void {
  }

  createItem(): void {
    this.itemService.create(this.item).subscribe(() => {
      this.itemService.showMessage('Item cadastrado!')
      this.router.navigate(['admin/item'])
    })
  }

  cancel(): void {
    this.router.navigate(['admin/item'])
  }
}
