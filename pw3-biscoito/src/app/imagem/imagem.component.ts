import { Component, Input } from '@angular/core';
export const random = Math.floor(Math.random() * 2);

@Component({
  selector: 'app-imagem',
  imports: [],
  templateUrl: './imagem.component.html',
  styleUrl: './imagem.component.css'
})
export class ImagemComponent {
  imagens = [
    'biscoito-aberto.png',
    'biscoito.png'
  ]

  @Input()foto : boolean = true;

  biscoito(){
    this.foto = !this.foto;
  }
}
// Matheus Jacob Duarte e Vitor da Luz