import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-video-modal',
  templateUrl: './video-modal.component.html',
  styleUrl: './video-modal.component.css'
})
export class VideoModalComponent {
  @Input() videoUrl: string = '';
  safeUrl: string = '';

  ngOnChanges() {
    if (this.videoUrl) {
      // Fuerza autoplay cuando se abre
      this.safeUrl = `${this.videoUrl}?autoplay=1`;
    }
  }

  ngOnInit(): void {
    const modalEl = document.getElementById('videoModal');
    if (modalEl) {
      modalEl.addEventListener('hidden.bs.modal', () => {
        this.closeModal(); // 👈 se ejecuta al cerrar con click afuera o ESC
      });
    }
  }

  closeModal() {
    this.safeUrl = ''; // 👈 esto elimina el iframe → pausa el video
  }
}
