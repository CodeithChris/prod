import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonContent, IonModal } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonContent,
    IonModal
  ],
})
export class HomePage {
  @ViewChild(IonContent) content!: IonContent;
  
  isTrailerModalOpen = false;
  currentVideo = 'assets/videos/video.mp4';

  films = [
    {
      title: 'Silence is Key',
      year: 2024,
      poster: 'assets/images/image-8.jpg',
      description: 'A psychological crime thriller about a detective drawn into a twisted game of manipulation.',
      trailer: 'assets/videos/video.mp4'
    },
    {
      title: 'The Dark Path',
      year: 2023,
      poster: 'assets/images/image-9.jpg',
      description: 'A suspenseful journey through the shadows of human nature and redemption.',
      trailer: 'assets/videos/video.mp4'
    },
    {
      title: 'Echo Chamber',
      year: 2023,
      poster: 'assets/images/image-10.jpg',
      description: 'A mind-bending thriller that explores the boundaries of reality and perception.',
      trailer: 'assets/videos/video.mp4'
    },
    {
      title: 'Whispers in the Night',
      year: 2024,
      poster: 'assets/images/image-11.jpg',
      description: 'A haunting tale of secrets that refuse to stay buried in the darkness.',
      trailer: 'assets/videos/video.mp4'
    }
  ];

  constructor() {}

  // Navigation methods
  async navigateToSection(sectionId: string) {
    try {
      const element = document.getElementById(sectionId);
      
      if (element) {
        // Use Ionic's scrollTo method if available
        if (this.content) {
          const elementPosition = element.offsetTop - 80; // Account for header
          await this.content.scrollToPoint(0, elementPosition, 1000);
        } else {
          // Fallback to native scrolling
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      } else {
        // Fallback: scroll to top for home
        if (sectionId === 'home') {
          if (this.content) {
            await this.content.scrollToTop(1000);
          } else {
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }
        }
      }
    } catch (error) {
      // Final fallback
      if (sectionId === 'home') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    }
  }

  // Trailer methods
  openTrailer() {
    this.isTrailerModalOpen = true;
  }

  closeTrailer() {
    this.isTrailerModalOpen = false;
  }

  openFilmTrailer(trailerUrl: string) {
    this.currentVideo = trailerUrl;
    this.isTrailerModalOpen = true;
  }
}
