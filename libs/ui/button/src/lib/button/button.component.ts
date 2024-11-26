import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

type Variant = 'primary' | 'secondary' | 'tertiary';
type Theme = 'blue' | 'violet';
type Size = 'small' | 'medium' | 'large';

@Component({
  selector: 'ab-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  /**
   *Texto do botão
   */
  @Input() text = '';
  /**
   *Variante do botão
   */
  @Input() variant: Variant = 'primary';
  /**
   *Desabilita o botão
   */
  @Input() disabled = false;
  /**
   *Tema do botão
   */
  @Input() theme: Theme = 'blue';
  /**
   *Tamanho do botão
   */
  @Input() size: Size = 'medium';

  /**
   *Retorna as classes do botão
   */
  getClasses(): string {
    return `${this.variant} ${this.theme} ${this.size}`;
  }
}
