import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'p3',
  templateUrl: './p3.component.html',
  styleUrls: ['./p3.component.css']
})
export class P3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  textSet = [
    {
      name: "凸版印刷效果",
      title: "",
      class: "text-protruding"
    },
    {
      name: "凸版印刷效果",
      title: "",
      class: "text-protruding2"
    },
    {
      name: "空心文字",
      title: "",
      class: "hollow-text"
    },
    {
      name: "文字外发光",
      title: "",
      class: "glow-text"
    },
    {
      name: "文字凸起",
      title: "",
      class: "extruded-text"
    },
    {
      name: "复古标志牌",
      title: "",
      class: "extruded-text-black"
    },
  ]
}
