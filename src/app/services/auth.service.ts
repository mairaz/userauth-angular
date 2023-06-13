import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {  }


  signup(body: any){
    console.log(body)

   return this.http.post('http://localhost:3000/signup',body)
   .pipe(shareReplay())
  }
}
