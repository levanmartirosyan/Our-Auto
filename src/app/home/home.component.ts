import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavComponent } from './navigation/nav/nav.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, NavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
