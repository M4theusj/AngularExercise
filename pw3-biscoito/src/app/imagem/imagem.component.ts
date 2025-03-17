import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-imagem',
  templateUrl: './imagem.component.html',
  styleUrls: ['./imagem.component.css']
})
export class ImagemComponent {
  imagens = [
    'assets/biscoito-aberto.png',
    'assets/biscoito.png'
  ];

  @Input() foto: number = 1; 

  biscoito() {
    this.foto = this.foto === 1 ? 0 : 1;
  }
}
