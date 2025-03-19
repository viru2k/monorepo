import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StorybookComponentsComponent } from './private/storybook/storybook.component';
import { CommonModule } from '@angular/common';

@Component({
  imports: [RouterModule, CommonModule, StorybookComponentsComponent
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'backoffice-monorepo';
}
