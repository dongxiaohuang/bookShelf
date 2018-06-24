import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../services/library.service';
import { Book } from '../shared/book';
@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  savedBooks: Book[];
  constructor(private libraryService: LibraryService) {
       this.savedBooks = this.libraryService.books;
 }

  ngOnInit() {
  }

}
