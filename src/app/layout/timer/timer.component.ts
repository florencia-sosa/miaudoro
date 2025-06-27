import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss',
})
export class TimerComponent {}
