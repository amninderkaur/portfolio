import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LikeButtonService {

  constructor() { }

  likeCard(elementId: string) {
    alert('LIKE');
    const element = document.getElementById(elementId);
    if (element) {
      element.style.color = 'crimson';
    }
  }
}

