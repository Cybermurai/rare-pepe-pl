import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import { UsersService } from '../../services/users.service';
import { Swiper } from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})

export class HomePage implements OnInit {

  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;

  constructor(private itemsData:ItemsService, public usersData:UsersService) {}
  items = this.itemsData.prepareItems(3);

  swiperReady(){
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }

  goNext(){
    this.swiperRef?.nativeElement.swiper.slideNext(400);
  }

  goPrev(){
    this.swiperRef?.nativeElement.swiper.slidePrev(400);
  }

  ngOnInit() {}
}
