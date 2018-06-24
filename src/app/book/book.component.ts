import { Component, OnInit } from '@angular/core';
import { Book } from "../shared/book";
import { GoogleBooksService } from '../services/google-books.service';
import { LibraryService } from '../services/library.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  private book: Book;
  private bookId: string;
  constructor(
    private googleBooksService: GoogleBooksService,
    private libraryService: LibraryService,
    private router: Router,
    private activatedRoute: ActivatedRoute
) {
         this.activatedRoute.params.subscribe(
              params => {
                   if(params['bookId']){
                        console.log(params.bookId);
                        this.getBook(params['bookId'])
                   }
         }
         )
    }

  ngOnInit() {
  }
  getBook(bookId: string) {
    this.googleBooksService.retrieveBook(bookId)
     .subscribe(book => {this.book = book; console.log(book);});
  }

  hasBook(book: Book): boolean {
    if(book){
         return this.libraryService.hasBook(book);
    }
  }

  addBook(book: Book) {
    if(book){
         return this.libraryService.addBook(book);
    }
  }

  removeBook(book: Book) {
       if(book){
           return this.libraryService.removeBook(book);
      }
  }
}
