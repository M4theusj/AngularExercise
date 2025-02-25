import { Component } from '@angular/core';
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

  foto = this.imagens[random];
}
// Matheus Jacob Duarte e Vitor da Luz