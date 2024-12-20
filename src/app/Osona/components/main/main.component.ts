import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { OsanaService } from '../../services/osana-service.service';


@Component({
  selector: 'osona-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements AfterViewInit{

  @ViewChildren('animElements') animElements!: QueryList<ElementRef>;

  constructor(private osanaService:OsanaService){
     
  }
  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible','animate__animated','animate__fadeIn','animate__slow');
          obs.unobserve(entry.target); // Desactiva el observador para este elemento después de la primera vez.
        }
      });
    }, {
      threshold: 0.3,  // El 20% del elemento debe estar visible antes de activar la animación.
      rootMargin: '0px 0px -30% 0px'  // Activa el observador 50px antes de que el elemento esté completamente en el viewport.
    });

    this.animElements.forEach((element) => {
      observer.observe(element.nativeElement);
    });
  }

} 
