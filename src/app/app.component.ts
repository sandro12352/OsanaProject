import { Component, OnInit } from '@angular/core';
import Aos from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit {
  
  title = 'projectOsana';


  ngOnInit(): void {
    Aos.init({
      duration: 1000, // tiempo de animación en ms
    });
  }
}
