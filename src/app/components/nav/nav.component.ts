import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav,miaudoro-nav',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss','./../button/button.component.scss'],
})
export class NavComponent {}
