import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio-page',
  templateUrl: './inicio-page.component.html',
  styleUrl: './inicio-page.component.css',
})
export class InicioPageComponent {
    selectedVideo: string = '';

    videos = [
      {
        title: 'Diseños Arquitectónicos Modernos',
        url: 'https://www.youtube.com/embed/Scxs7L0vhZ4',
        thumbnail: 'https://img.youtube.com/vi/Scxs7L0vhZ4/hqdefault.jpg'
      },
      {
        title: 'Construcción Integral',
        url: 'https://www.youtube.com/embed/ysz5S6PUM-U',
        thumbnail: 'https://img.youtube.com/vi/ysz5S6PUM-U/hqdefault.jpg'
      },
      {
        title: 'Consultoría Técnica',
        url: 'https://www.youtube.com/embed/jfKfPfyJRdk',
        thumbnail: 'https://img.youtube.com/vi/jfKfPfyJRdk/hqdefault.jpg'
      }
    ];

    openVideo(url: string) {
      this.selectedVideo = url;
    }
}
