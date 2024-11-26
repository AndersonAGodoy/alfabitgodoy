import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ab-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  /**
   * Ativa a multilinha do input
   */
  @Input() multiline = false;
  /**
   * Forneça um label para o input
   */
  @Input() label = '';
  /**
   * Forneça um id único para cada input
   */
  @Input() id = '';

  @Input() disabled = false;

  /**
   *  Retorna classe CSS personalizada para o label
   */
  getContainerClasses(): string {
    let classes = 'input-container';

    if (this.label) {
      classes += ' with-label';
    }

    return classes;
  }
}
