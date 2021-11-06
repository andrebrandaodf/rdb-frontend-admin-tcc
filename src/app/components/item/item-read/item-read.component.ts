import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ItemService } from 'src/app/services/item.service';


@Component({
  selector: 'app-item-read',
  templateUrl: './item-read.component.html',
  styleUrls: ['./item-read.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class ItemReadComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  isLoading: boolean = true;

  dataSource: any;

  expandedElement: any | null;

  columnsToDisplay = [
    'name',
    'category',
    'action',
  ];

  constructor(private itemService: ItemService) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.getAllPaginator();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllPaginator() {
    this.isLoading = true;
    this.itemService.getAll().subscribe((res: any) => {
      this.dataSource = new MatTableDataSource(res || []);
      setTimeout(() => this.dataSource.paginator = this.paginator);
      this.isLoading = false;
    })
  }
}
