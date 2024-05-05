import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../_service/master.service';
import { Post } from '../../../_model/post';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [],
  providers: [],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css',
})
export class CustomerComponent implements OnInit {
  listPosts!: Post[];

  constructor(private masterService: MasterService) {}
  ngOnInit(): void {
    this.loadInitialData();
  }

  loadInitialData() {
    this.masterService
      .getAll()
      .subscribe((result) => (this.listPosts = result));

    console.log(this.listPosts);
  }
}
