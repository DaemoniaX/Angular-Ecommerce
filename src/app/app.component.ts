// app.component.ts
//FIX 02/06/2025, the "About us & contact" that wasn't linked at the bottom of the page issue is now fixed.
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@Component({//Method FlexBox
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet],
  template: `
    <app-header></app-header>

    <main class="content">
      <router-outlet></router-outlet>
    </main>

    <footer class="footer bg-black text-white py-4 text-center">
      About us &nbsp; Contact
    </footer>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      }

      .content {
        flex: 1;
      }

      .footer {

      }
    `
  ],
  standalone: true
})
export class AppComponent {
  
}
