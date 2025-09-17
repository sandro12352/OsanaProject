import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit {
  
  title = 'projectOsana';


  ngOnInit(): void {
    AOS.init({
      duration: 1000, // tiempo de animación en ms
    });
  }
}
