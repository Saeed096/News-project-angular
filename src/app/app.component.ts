import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';

@Component({
    selector: 'app-root',
    standalone: true, // not f..................... >> can have modules "built in" , directives , components >> include anything you need to use in this comp..
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavComponent, FooterComponent, LoginComponent]
})
export class AppComponent {
  title = 'task';
}
