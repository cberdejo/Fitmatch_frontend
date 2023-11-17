import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VerificationToken } from '../../models/verification_token_mail';

@Injectable({
  providedIn: 'root'
})
export class MailService {


  backend_url: string = 'http://localhost:3000/';
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) { }


  sendConfirmationEmail(email: string, token:string): Observable<string>{
    const body = {
      email: email,
      verificationToken: token
    };
        
    // Define las cabeceras de la solicitud, si es necesario
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
  
    const options = { headers: headers };
      //especificar tipo de datos
    return this.http.post<string>(this.backend_url + 'sendConfirmation', body, options);
  }

  createToken(email: string): Observable<VerificationToken>{
    const body = {
      email: email,
    };
        
    
    const options = { 
      headers: this.headers, 
    };

   
    return this.http.post<any>(this.backend_url + 'verificationToken', body, options);
  }

  verifyToken(email: string, token: string): Observable<{status: 'success' | 'error'}>{
    const body = {
      email: email,
      verificationToken: token
    };
    const options = {
      headers: this.headers,
    }

    
    return this.http.post<{status: 'success' | 'error'}>(this.backend_url + 'isVerified', body, options);
      
  

  }

  
  }