import { Injectable } from "@angular/core";

@Injectable()
export class AuthorService {
    getAuthors(): String[] {
        return [
            "Author 1", 
            "Author2", 
            "Author 3"
        ]
    }
}