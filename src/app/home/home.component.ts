import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  imageUrl: string = ''
  username: String = ''

  ngOnInit() {
    this.imageUrl = 'assets/images/foto-perfil.PNG';
    this.username = 'Fernanda';
  }
}
