// app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';

@Component({//Method FlexBox
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet, HttpClientModule],
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
