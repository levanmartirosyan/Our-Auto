import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavComponent } from './navigation/nav/nav.component';
import { CarsComponent } from './cars/cars.component';
import { InspectationsComponent } from './inspectations/inspectations.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, NavComponent, CarsComponent, InspectationsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
