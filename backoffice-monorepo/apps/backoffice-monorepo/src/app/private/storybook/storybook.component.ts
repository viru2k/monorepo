import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-storybook-components',
  templateUrl: './storybook.component.html',
  styleUrls: ['./storybook.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, InputTextModule, ButtonModule],
})
export class StorybookComponentsComponent {
  public text = '';

  onClick(): void {
    console.log('Texto ingresado:', this.text);
  }
}
