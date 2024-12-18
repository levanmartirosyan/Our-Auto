import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-vipcars',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './vipcars.component.html',
  styleUrl: './vipcars.component.scss',
})
export class VipcarsComponent implements OnInit {
  constructor(public apiService: ApiService) {}

  ngOnInit(): void {
    this.getVipCars();
  }

  @ViewChild('productContainer') productContainer!: ElementRef;

  public vipCars: any;
  getVipCars() {
    this.apiService.getVipCars().subscribe({
      next: (data: any) => {
        console.log(data.data);
        this.vipCars = data.data;
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

  scrollLeft() {
    const container = this.productContainer.nativeElement;
    container.scrollBy({
      left: -400,
      behavior: 'smooth',
    });
  }

  scrollRight() {
    const container = this.productContainer.nativeElement;
    container.scrollBy({
      left: 400,
      behavior: 'smooth',
    });
  }
}
