import { Component, OnInit } from '@angular/core';
import { GoogleBooksService } from '../services/google-books.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private term: string = "";
  constructor(private googleBooksService: GoogleBooksService,
       private router: Router,
       private activatedRoute: ActivatedRoute
 ) {
      this.activatedRoute.params.subscribe(
           params => {
           if(params['term']){
                this.onSearch(params['term']);
                this.term = params['term'];
           };}
      );}
  doSearch() {
    // change the url
    this.router.navigate(['search', {term: this.term}]);
}

  onSearch(term: string) {
    this.googleBooksService.searchBooks(term);
  }
  ngOnInit() {
  }

}
