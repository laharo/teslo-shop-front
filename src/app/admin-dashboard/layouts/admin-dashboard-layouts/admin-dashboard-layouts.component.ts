import { Component, computed, inject } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { AuthService } from '@auth/services/auth.service';

@Component({
  selector: 'app-admin-dashboard-layouts',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './admin-dashboard-layouts.component.html',
})
export class AdminDashboardLayoutsComponent {
  authService = inject(AuthService);

  user = computed(() => this.authService.user());
}
