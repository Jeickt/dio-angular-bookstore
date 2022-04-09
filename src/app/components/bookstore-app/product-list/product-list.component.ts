import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/Book';
import { BookService } from './product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  bookService: BookService;
  livros!: Book[];

  constructor(bookService: BookService) {
    this.bookService = bookService;
  }

  ngOnInit(): void {
    this.livros = this.bookService.getBooks();
  }
}
