import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavComponent } from './navigation/nav/nav.component';
import { CarsComponent } from './cars/cars.component';
import { InspectationsComponent } from './inspectations/inspectations.component';
import { LoaderComponent } from '../loader/loader.component';
import { ToolsService } from '../services/tools.service';
import { VipcarsComponent } from './vipcars/vipcars.component';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    NavComponent,
    CarsComponent,
    InspectationsComponent,
    LoaderComponent,
    VipcarsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(public tools: ToolsService, public apiService: ApiService) {}

  ngOnInit(): void {}
}
