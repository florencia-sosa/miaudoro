import { Routes } from '@angular/router';
import { TimerComponent } from './layout/timer/timer.component';
import { SettingsComponent } from './layout/settings/settings.component';

export const routes: Routes = [
  { path: '', redirectTo: 'timer', pathMatch: 'full' },
  { path: 'timer', component: TimerComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '**', redirectTo: 'timer' },
];
