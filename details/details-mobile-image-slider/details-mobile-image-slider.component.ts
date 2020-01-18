import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import Swiper from "swiper";

@Component({
  selector: 'app-details-mobile-image-slider',
  templateUrl: './details-mobile-image-slider.component.html',
  styleUrls: ['./details-mobile-image-slider.component.scss']
})
export class DetailsMobileImageSliderComponent implements OnInit, AfterViewInit {
  mySwiper: any;
  public screenWidth: number;
  public isVideoPlaying: boolean
  @Input() carouselData: object
  id = 'qDuKsiwS5xw';
  playerVars = {
    cc_lang_pref: 'en'
  };
  private player;
  private ytEvent;

  constructor() {
    this.screenWidth = window.innerWidth;
    this.isVideoPlaying=false
   }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.mySwiper = new Swiper(".swiper-container", {
      pagination: { el: ".swiper-pagination" },
      nextButton: ".swiper-button-next",
      prevButton: ".swiper-button-prev",
      autoplay: 300,
      spaceBetween: 30,
    });
  }

  onStateChange(event) {
    this.ytEvent = event.data;
  }
  savePlayer(player) {
    this.player = player;
  }
  
  playVideo() {
    this.player.playVideo();
  }
  
  pauseVideo() {
    this.player.pauseVideo();
  }

  playyVideo(){
    this.isVideoPlaying=!this.isVideoPlaying;

  }
}
