import { Component } from '@angular/core';
import { ApiAuthService } from '../../core/services/api-auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  currentUser: string | null;

  constructor(private apiAuthService: ApiAuthService) {
    this.currentUser = this.apiAuthService.getCurrentUser();
  }
}