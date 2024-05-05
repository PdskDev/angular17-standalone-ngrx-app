import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppMaterialModule } from '../../../_module/material.module';

@Component({
  selector: 'app-menuheader',
  standalone: true,
  imports: [RouterLink, AppMaterialModule],
  templateUrl: './menuheader.component.html',
  styleUrl: './menuheader.component.css',
})
export class MenuheaderComponent {}
