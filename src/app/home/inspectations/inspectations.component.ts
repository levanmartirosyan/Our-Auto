import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inspectations',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './inspectations.component.html',
  styleUrl: './inspectations.component.scss',
})
export class InspectationsComponent {
  constructor(public apiService: ApiService) {}

  public inspectionData: any;
  public vinNumber: any;
  public vinNumberData: any;

  public carPlateForm = new FormGroup({
    carPlate: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9]*$/),
    ]),
  });

  formatCarPlate(event: any) {
    let inputValue = event.target.value;

    inputValue = inputValue.replace(/[^a-zA-Z0-9]/g, '');

    let firstPart = inputValue.substring(0, 2).toUpperCase();
    let middlePart = inputValue.substring(2, 5);
    let lastPart = inputValue.substring(5, 7).toUpperCase();

    firstPart = firstPart.replace(/[^a-zA-Z]/g, '');
    middlePart = middlePart.replace(/[^0-9]/g, '');
    lastPart = lastPart.replace(/[^a-zA-Z]/g, '');

    inputValue =
      firstPart +
      (middlePart ? '-' + middlePart : '') +
      (lastPart ? '-' + lastPart : '');

    if (inputValue.length > 9) {
      inputValue = inputValue.substring(0, 9);
    }

    event.target.value = inputValue;

    this.carPlateForm.get('carPlate')?.setValue(inputValue);
  }

  getFormattedValueWithoutHyphen() {
    const value = this.carPlateForm.get('carPlate')?.value || '';
    return value.replace(/-/g, '').toLowerCase();
  }

  checkInspection() {
    const cleanedValue = this.getFormattedValueWithoutHyphen();

    this.apiService.checkTechInspection(cleanedValue).subscribe({
      next: (data: any) => {
        console.log(data);
        this.inspectionData = data;
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

  public vinNum = new FormGroup({
    VinCode: new FormControl('', [
      Validators.required,
      Validators.minLength(17),
      Validators.maxLength(17),
    ]),
  });

  checkVin() {
    this.apiService.checkVinNumber(this.vinNum.value).subscribe({
      next: (data: any) => {
        console.log(data);
        this.vinNumberData = data.data;
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}
