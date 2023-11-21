import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HugeComponent } from '../huge/huge.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-wrapper',
  standalone: true,
  imports: [CommonModule, HugeComponent, NgxSkeletonLoaderModule],
  templateUrl: './wrapper.component.html',
})
export class WrapperComponent {

}
