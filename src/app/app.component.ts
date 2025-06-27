import { Component } from '@angular/core';
import { NavComponent } from './components/nav/nav.component';
import { RouterModule, RouterOutlet } from '@angular/router';
declare global {
  interface Window {
    electronAPI: {
      minimize: () => void;
      close: () => void;
    };
  }
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'miaudoro';

  minimize() {
    window.electronAPI?.minimize();
  }

  close() {
    window.electronAPI?.close();
  }
  prueba() {
    console.log('prueba');
  }
}
