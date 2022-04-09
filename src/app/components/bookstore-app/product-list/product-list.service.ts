import { Injectable } from '@angular/core';
import { Book } from '../../../model/Book';

@Injectable()
export class BookService {
  constructor() {}

  getBooks() {
    let books = [
      {
        id: '1',
        name: 'Torto Arado',
        price: 46.99,
        quantity: 1,
        category: 'nacional',
        img: 'https://livrariacultura.vteximg.com.br/arquivos/ids/85622919-300-300/2112104029.jpg?v=637817363107230000',
      },
      {
        id: '2',
        name: 'A Hipótese da Simulação',
        price: 49.9,
        quantity: 2,
        category: 'nacional',
        img: 'https://livrariacultura.vteximg.com.br/arquivos/ids/86437423-300-300/2112308554.jpg?v=637823827497730000',
      },
      {
        id: '3',
        name: '8 Caminhos que Levam à Riqueza',
        price: 49.9,
        quantity: 5,
        category: 'nacional',
        img: 'https://livrariacultura.vteximg.com.br/arquivos/ids/85477315-300-300/2112313378.jpg?v=637816463007730000',
      },
      {
        id: '4',
        name: 'Mindset',
        price: 49.9,
        quantity: 2,
        category: 'nacional',
        img: 'https://livrariacultura.vteximg.com.br/arquivos/ids/87379605-300-300/46439767.jpg?v=637834733773100000',
      },
      {
        id: '5',
        name: '+ Esperto que o Diabo',
        price: 42.9,
        quantity: 3,
        category: 'nacional',
        img: 'https://livrariacultura.vteximg.com.br/arquivos/ids/88857324-300-300/42269775.jpg?v=637848890148500000',
      },
    ];
    return books;
  }
}
