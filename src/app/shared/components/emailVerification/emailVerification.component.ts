import { Component, OnInit, Input, Output, EventEmitter, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { MailService } from '../../services/mailService/mail.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-emailVerification',
  templateUrl: './emailVerification.component.html',
  styleUrls: ['./emailVerification.component.css']
})
export class EmailVerificationComponent implements OnInit {

 

  @Input() email!: string;
  

  private createTokenSubscription: Subscription | undefined;
  private sendVerificationEmailSubscription: Subscription | undefined;

  constructor(
    private mailService: MailService,
    private messageService: MessageService
    
    ) { }

  ngOnInit() {
    //this.createToken();
  }

  createToken() {
    this.createTokenSubscription = this.mailService.createToken(this.email).subscribe(
      (response) => {
        const token = response.token;
        this.sendVerificationEmail(token);
      }
    );
  }

  sendVerificationEmail(token: string) {
    this.sendVerificationEmailSubscription = this.mailService.sendConfirmationEmail(this.email, token).subscribe(
      (response) => {
        console.log(response);
        this.messageService.add({ severity: 'success', summary: 'Email enviado', detail: 'Se ha enviado un email de verificación al correo, compruebe su badeja de entrada ' + this.email });
      }
    );
  }

  
  ngOnDestroy() {
    // Desuscribirse para evitar pérdidas de memoria
    if (this.createTokenSubscription) {
      this.createTokenSubscription.unsubscribe();
    }

    if (this.sendVerificationEmailSubscription) {
      this.sendVerificationEmailSubscription.unsubscribe();
    }
  }
}
