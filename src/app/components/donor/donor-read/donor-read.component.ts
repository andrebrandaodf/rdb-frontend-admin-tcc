import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { DonorService } from 'src/app/services/donor.service';


@Component({
  selector: 'app-donor-read',
  templateUrl: './donor-read.component.html',
  styleUrls: ['./donor-read.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class DonorReadComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  isLoading: boolean = true;

  dataSource: any;

  expandedElement: any | null;

  columnsToDisplay = [
    'name',
    'surname',
    'email',
    'address',
    'action',
  ];

  constructor(private donorService: DonorService) {
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
    this.donorService.getAll().subscribe((res: any) => {
      this.dataSource = new MatTableDataSource(res || []);
      setTimeout(() => this.dataSource.paginator = this.paginator);
      this.isLoading = false;
    })
  }
}
