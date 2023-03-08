import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  authors = ["Author 1", "Author 2", "Author 3"];
  constructor() { }

  getAuthors() {
    return this.authors;
  }
}
