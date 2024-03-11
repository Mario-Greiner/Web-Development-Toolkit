import { Component, OnInit } from '@angular/core';
import { FavoritesService } from 'src/app/services/favorites.service';

export interface UFT8symbol {
  char: string;
  dec: number;
  hex: string;
  entity: string;
  name: string;
}

@Component({
  selector: 'app-utf-eight-symbols',
  templateUrl: './utf-eight-symbols.component.html',
  styleUrls: ['./utf-eight-symbols.component.scss']
})
export class UtfEightSymbolsComponent implements OnInit {

  isFav = false;
  item = {
    name: 'HTML Entities',
    description: 'Encode/decode and overview for all html entities',
    category: 'Work in progess',
    icon: 'assets/icons/html5.svg',
    url: '/cheatsheets/html-entities',
  };

  displayedColumns: string[] = ['character', 'name', 'number', 'description'];

  constructor(
    private favS: FavoritesService
  ) { 
    this.isFav = Boolean(this.favS.isFavorite(this.item));
  }

  ngOnInit(): void {
  }

  utf8: UFT8symbol[] = [
    {
      "char": "☀",
      "dec": 9728,
      "hex": "2600",
      "entity": "",
      "name": "BLACK SUN WITH RAYS"
  },
  {
      "char": "☁",
      "dec": 9729,
      "hex": "2601",
      "entity": "",
      "name": "CLOUD"
  },
  {
      "char": "☂",
      "dec": 9730,
      "hex": "2602",
      "entity": "",
      "name": "UMBRELLA"
  },
  {
      "char": "☃",
      "dec": 9731,
      "hex": "2603",
      "entity": "",
      "name": "SNOWMAN"
  },
  {
      "char": "☄",
      "dec": 9732,
      "hex": "2604",
      "entity": "",
      "name": "COMET"
  },
  {
      "char": "★",
      "dec": 9733,
      "hex": "2605",
      "entity": "",
      "name": "BLACK STAR"
  },
  {
      "char": "☆",
      "dec": 9734,
      "hex": "2606",
      "entity": "",
      "name": "WHITE STAR"
  },
  {
      "char": "☇",
      "dec": 9735,
      "hex": "2607",
      "entity": "",
      "name": "LIGHTNING"
  },
  {
      "char": "☈",
      "dec": 9736,
      "hex": "2608",
      "entity": "",
      "name": "THUNDERSTORM"
  },
  {
      "char": "☉",
      "dec": 9737,
      "hex": "2609",
      "entity": "",
      "name": "SUN"
  },
  {
      "char": "☊",
      "dec": 9738,
      "hex": "260A",
      "entity": "",
      "name": "ASCENDING NODE"
  },
  {
      "char": "☋",
      "dec": 9739,
      "hex": "260B",
      "entity": "",
      "name": "DESCENDING NODE"
  },
  {
      "char": "☌",
      "dec": 9740,
      "hex": "260C",
      "entity": "",
      "name": "CONJUNCTION"
  },
  {
      "char": "☍",
      "dec": 9741,
      "hex": "260D",
      "entity": "",
      "name": "OPPOSITION"
  },
  {
      "char": "☎",
      "dec": 9742,
      "hex": "260E",
      "entity": "",
      "name": "BLACK TELEPHONE"
  },
  {
      "char": "☏",
      "dec": 9743,
      "hex": "260F",
      "entity": "",
      "name": "WHITE TELEPHONE"
  },
  {
      "char": "☐",
      "dec": 9744,
      "hex": "2610",
      "entity": "",
      "name": "BALLOT BOX"
  },
  {
      "char": "☑",
      "dec": 9745,
      "hex": "2611",
      "entity": "",
      "name": "BALLOT BOX WITH CHECK"
  },
  {
      "char": "☒",
      "dec": 9746,
      "hex": "2612",
      "entity": "",
      "name": "BALLOT BOX WITH X"
  },
  {
      "char": "☓",
      "dec": 9747,
      "hex": "2613",
      "entity": "",
      "name": "SALTIRE"
  },
  {
      "char": "☔",
      "dec": 9748,
      "hex": "2614",
      "entity": "",
      "name": "UMBRELLA WITH RAIN DROPS"
  },
  {
      "char": "☕",
      "dec": 9749,
      "hex": "2615",
      "entity": "",
      "name": "HOT BEVERAGE"
  },
  {
      "char": "☖",
      "dec": 9750,
      "hex": "2616",
      "entity": "",
      "name": "WHITE SHOGI PIECE"
  },
  {
      "char": "☗",
      "dec": 9751,
      "hex": "2617",
      "entity": "",
      "name": "BLACK SHOGI PIECE"
  },
  {
      "char": "☘",
      "dec": 9752,
      "hex": "2618",
      "entity": "",
      "name": "SHAMROCK"
  },
  {
      "char": "☙",
      "dec": 9753,
      "hex": "2619",
      "entity": "",
      "name": "REVERSED ROTATED FLORAL HEART BULLET"
  },
  {
      "char": "☚",
      "dec": 9754,
      "hex": "261A",
      "entity": "",
      "name": "BLACK LEFT POINTING INDEX"
  },
  {
      "char": "☛",
      "dec": 9755,
      "hex": "261B",
      "entity": "",
      "name": "BLACK RIGHT POINTING INDEX"
  },
  {
      "char": "☜",
      "dec": 9756,
      "hex": "261C",
      "entity": "",
      "name": "WHITE LEFT POINTING INDEX"
  },
  {
      "char": "☝",
      "dec": 9757,
      "hex": "261D",
      "entity": "",
      "name": "WHITE UP POINTING INDEX"
  },
  {
      "char": "☞",
      "dec": 9758,
      "hex": "261E",
      "entity": "",
      "name": "WHITE RIGHT POINTING INDEX"
  },
  {
      "char": "☟",
      "dec": 9759,
      "hex": "261F",
      "entity": "",
      "name": "WHITE DOWN POINTING INDEX"
  },
  {
      "char": "☠",
      "dec": 9760,
      "hex": "2620",
      "entity": "",
      "name": "SKULL AND CROSSBONES"
  },
  {
      "char": "☡",
      "dec": 9761,
      "hex": "2621",
      "entity": "",
      "name": "CAUTION SIGN"
  },
  {
      "char": "☢",
      "dec": 9762,
      "hex": "2622",
      "entity": "",
      "name": "RADIOACTIVE SIGN"
  },
  {
      "char": "☣",
      "dec": 9763,
      "hex": "2623",
      "entity": "",
      "name": "BIOHAZARD SIGN"
  },
  {
      "char": "☤",
      "dec": 9764,
      "hex": "2624",
      "entity": "",
      "name": "CADUCEUS"
  },
  {
      "char": "☥",
      "dec": 9765,
      "hex": "2625",
      "entity": "",
      "name": "ANKH"
  },
  {
      "char": "☦",
      "dec": 9766,
      "hex": "2626",
      "entity": "",
      "name": "ORTHODOX CROSS"
  },
  {
      "char": "☧",
      "dec": 9767,
      "hex": "2627",
      "entity": "",
      "name": "CHI RHO"
  },
  {
      "char": "☨",
      "dec": 9768,
      "hex": "2628",
      "entity": "",
      "name": "CROSS OF LORRAINE"
  },
  {
      "char": "☩",
      "dec": 9769,
      "hex": "2629",
      "entity": "",
      "name": "CROSS OF JERUSALEM"
  },
  {
      "char": "☪",
      "dec": 9770,
      "hex": "262A",
      "entity": "",
      "name": "STAR AND CRESCENT"
  },
  {
      "char": "☫",
      "dec": 9771,
      "hex": "262B",
      "entity": "",
      "name": "FARSI SYMBOL"
  },
  {
      "char": "☬",
      "dec": 9772,
      "hex": "262C",
      "entity": "",
      "name": "KHANDA"
  },
  {
      "char": "☭",
      "dec": 9773,
      "hex": "262D",
      "entity": "",
      "name": "HAMMER AND SICKLE"
  },
  {
      "char": "☮",
      "dec": 9774,
      "hex": "262E",
      "entity": "",
      "name": "PEACE SYMBOL"
  },
  {
      "char": "☯",
      "dec": 9775,
      "hex": "262F",
      "entity": "",
      "name": "YIN YANG"
  },
  {
      "char": "☰",
      "dec": 9776,
      "hex": "2630",
      "entity": "",
      "name": "TRIGRAM FOR HEAVEN"
  },
  {
      "char": "☱",
      "dec": 9777,
      "hex": "2631",
      "entity": "",
      "name": "TRIGRAM FOR LAKE"
  },
  {
      "char": "☲",
      "dec": 9778,
      "hex": "2632",
      "entity": "",
      "name": "TRIGRAM FOR FIRE"
  },
  {
      "char": "☳",
      "dec": 9779,
      "hex": "2633",
      "entity": "",
      "name": "TRIGRAM FOR THUNDER"
  },
  {
      "char": "☴",
      "dec": 9780,
      "hex": "2634",
      "entity": "",
      "name": "TRIGRAM FOR WIND"
  },
  {
      "char": "☵",
      "dec": 9781,
      "hex": "2635",
      "entity": "",
      "name": "TRIGRAM FOR WATER"
  },
  {
      "char": "☶",
      "dec": 9782,
      "hex": "2636",
      "entity": "",
      "name": "TRIGRAM FOR MOUNTAIN"
  },
  {
      "char": "☷",
      "dec": 9783,
      "hex": "2637",
      "entity": "",
      "name": "TRIGRAM FOR EARTH"
  },
  {
      "char": "☸",
      "dec": 9784,
      "hex": "2638",
      "entity": "",
      "name": "WHEEL OF DHARMA"
  },
  {
      "char": "☹",
      "dec": 9785,
      "hex": "2639",
      "entity": "",
      "name": "WHITE FROWNING FACE"
  },
  {
      "char": "☺",
      "dec": 9786,
      "hex": "263A",
      "entity": "",
      "name": "WHITE SMILING FACE"
  },
  {
      "char": "☻",
      "dec": 9787,
      "hex": "263B",
      "entity": "",
      "name": "BLACK SMILING FACE"
  },
  {
      "char": "☼",
      "dec": 9788,
      "hex": "263C",
      "entity": "",
      "name": "WHITE SUN WITH RAYS"
  },
  {
      "char": "☽",
      "dec": 9789,
      "hex": "263D",
      "entity": "",
      "name": "FIRST QUARTER MOON"
  },
  {
      "char": "☾",
      "dec": 9790,
      "hex": "263E",
      "entity": "",
      "name": "LAST QUARTER MOON"
  },
  {
      "char": "☿",
      "dec": 9791,
      "hex": "263F",
      "entity": "",
      "name": "MERCURY"
  },
  {
      "char": "♀",
      "dec": 9792,
      "hex": "2640",
      "entity": "",
      "name": "FEMALE SIGN"
  },
  {
      "char": "♁",
      "dec": 9793,
      "hex": "2641",
      "entity": "",
      "name": "EARTH"
  },
  {
      "char": "♂",
      "dec": 9794,
      "hex": "2642",
      "entity": "",
      "name": "MALE SIGN"
  },
  {
      "char": "♃",
      "dec": 9795,
      "hex": "2643",
      "entity": "",
      "name": "JUPITER"
  },
  {
      "char": "♄",
      "dec": 9796,
      "hex": "2644",
      "entity": "",
      "name": "SATURN"
  },
  {
      "char": "♅",
      "dec": 9797,
      "hex": "2645",
      "entity": "",
      "name": "URANUS"
  },
  {
      "char": "♆",
      "dec": 9798,
      "hex": "2646",
      "entity": "",
      "name": "NEPTUNE"
  },
  {
      "char": "♇",
      "dec": 9799,
      "hex": "2647",
      "entity": "",
      "name": "PLUTO"
  },
  {
      "char": "♈",
      "dec": 9800,
      "hex": "2648",
      "entity": "",
      "name": "ARIES"
  },
  {
      "char": "♉",
      "dec": 9801,
      "hex": "2649",
      "entity": "",
      "name": "TAURUS"
  },
  {
      "char": "♊",
      "dec": 9802,
      "hex": "264A",
      "entity": "",
      "name": "GEMINI"
  },
  {
      "char": "♋",
      "dec": 9803,
      "hex": "264B",
      "entity": "",
      "name": "CANCER"
  },
  {
      "char": "♌",
      "dec": 9804,
      "hex": "264C",
      "entity": "",
      "name": "LEO"
  },
  {
      "char": "♍",
      "dec": 9805,
      "hex": "264D",
      "entity": "",
      "name": "VIRGO"
  },
  {
      "char": "♎",
      "dec": 9806,
      "hex": "264E",
      "entity": "",
      "name": "LIBRA"
  },
  {
      "char": "♏",
      "dec": 9807,
      "hex": "264F",
      "entity": "",
      "name": "SCORPIUS"
  },
  {
      "char": "♐",
      "dec": 9808,
      "hex": "2650",
      "entity": "",
      "name": "SAGITTARIUS"
  },
  {
      "char": "♑",
      "dec": 9809,
      "hex": "2651",
      "entity": "",
      "name": "CAPRICORN"
  },
  {
      "char": "♒",
      "dec": 9810,
      "hex": "2652",
      "entity": "",
      "name": "AQUARIUS"
  },
  {
      "char": "♓",
      "dec": 9811,
      "hex": "2653",
      "entity": "",
      "name": "PISCES"
  },
  {
      "char": "♔",
      "dec": 9812,
      "hex": "2654",
      "entity": "",
      "name": "WHITE CHESS KING"
  },
  {
      "char": "♕",
      "dec": 9813,
      "hex": "2655",
      "entity": "",
      "name": "WHITE CHESS QUEEN"
  },
  {
      "char": "♖",
      "dec": 9814,
      "hex": "2656",
      "entity": "",
      "name": "WHITE CHESS ROOK"
  },
  {
      "char": "♗",
      "dec": 9815,
      "hex": "2657",
      "entity": "",
      "name": "WHITE CHESS BISHOP"
  },
  {
      "char": "♘",
      "dec": 9816,
      "hex": "2658",
      "entity": "",
      "name": "WHITE CHESS KNIGHT"
  },
  {
      "char": "♙",
      "dec": 9817,
      "hex": "2659",
      "entity": "",
      "name": "WHITE CHESS PAWN"
  },
  {
      "char": "♚",
      "dec": 9818,
      "hex": "265A",
      "entity": "",
      "name": "BLACK CHESS KING"
  },
  {
      "char": "♛",
      "dec": 9819,
      "hex": "265B",
      "entity": "",
      "name": "BLACK CHESS QUEEN"
  },
  {
      "char": "♜",
      "dec": 9820,
      "hex": "265C",
      "entity": "",
      "name": "BLACK CHESS ROOK"
  },
  {
      "char": "♝",
      "dec": 9821,
      "hex": "265D",
      "entity": "",
      "name": "BLACK CHESS BISHOP"
  },
  {
      "char": "♞",
      "dec": 9822,
      "hex": "265E",
      "entity": "",
      "name": "BLACK CHESS KNIGHT"
  },
  {
      "char": "♟",
      "dec": 9823,
      "hex": "265F",
      "entity": "",
      "name": "BLACK CHESS PAWN"
  },
  {
      "char": "♠",
      "dec": 9824,
      "hex": "2660",
      "entity": "♠",
      "name": "BLACK SPADE SUIT"
  },
  {
      "char": "♡",
      "dec": 9825,
      "hex": "2661",
      "entity": "",
      "name": "WHITE HEART SUIT"
  },
  {
      "char": "♢",
      "dec": 9826,
      "hex": "2662",
      "entity": "",
      "name": "WHITE DIAMOND SUIT"
  },
  {
      "char": "♣",
      "dec": 9827,
      "hex": "2663",
      "entity": "♣",
      "name": "BLACK CLUB SUIT"
  },
  {
      "char": "♤",
      "dec": 9828,
      "hex": "2664",
      "entity": "",
      "name": "WHITE SPADE SUIT"
  },
  {
      "char": "♥",
      "dec": 9829,
      "hex": "2665",
      "entity": "♥",
      "name": "BLACK HEART SUIT"
  },
  {
      "char": "♦",
      "dec": 9830,
      "hex": "2666",
      "entity": "♦",
      "name": "BLACK DIAMOND SUIT"
  },
  {
      "char": "♧",
      "dec": 9831,
      "hex": "2667",
      "entity": "",
      "name": "WHITE CLUB SUIT"
  },
  {
      "char": "♨",
      "dec": 9832,
      "hex": "2668",
      "entity": "",
      "name": "HOT SPRINGS"
  },
  {
      "char": "♩",
      "dec": 9833,
      "hex": "2669",
      "entity": "",
      "name": "QUARTER NOTE"
  },
  {
      "char": "♪",
      "dec": 9834,
      "hex": "266A",
      "entity": "",
      "name": "EIGHTH NOTE"
  },
  {
      "char": "♫",
      "dec": 9835,
      "hex": "266B",
      "entity": "",
      "name": "BEAMED EIGHTH NOTES"
  },
  {
      "char": "♬",
      "dec": 9836,
      "hex": "266C",
      "entity": "",
      "name": "BEAMED SIXTEENTH NOTES"
  },
  {
      "char": "♭",
      "dec": 9837,
      "hex": "266D",
      "entity": "",
      "name": "MUSIC FLAT SIGN"
  },
  {
      "char": "♮",
      "dec": 9838,
      "hex": "266E",
      "entity": "",
      "name": "MUSIC NATURAL SIGN"
  },
  {
      "char": "♯",
      "dec": 9839,
      "hex": "266F",
      "entity": "",
      "name": "MUSIC SHARP SIGN"
  },
  {
      "char": "♰",
      "dec": 9840,
      "hex": "2670",
      "entity": "",
      "name": "WEST SYRIAC CROSS"
  },
  {
      "char": "♱",
      "dec": 9841,
      "hex": "2671",
      "entity": "",
      "name": "EAST SYRIAC CROSS"
  },
  {
      "char": "♲",
      "dec": 9842,
      "hex": "2672",
      "entity": "",
      "name": "UNIVERSAL RECYCLING SYMBOL"
  },
  {
      "char": "♳",
      "dec": 9843,
      "hex": "2673",
      "entity": "",
      "name": "RECYCLING SYMBOL FOR TYPE-1 PLASTICS"
  },
  {
      "char": "♴",
      "dec": 9844,
      "hex": "2674",
      "entity": "",
      "name": "RECYCLING SYMBOL FOR TYPE-2 PLASTICS"
  },
  {
      "char": "♵",
      "dec": 9845,
      "hex": "2675",
      "entity": "",
      "name": "RECYCLING SYMBOL FOR TYPE-3 PLASTICS"
  },
  {
      "char": "♶",
      "dec": 9846,
      "hex": "2676",
      "entity": "",
      "name": "RECYCLING SYMBOL FOR TYPE-4 PLASTICS"
  },
  {
      "char": "♷",
      "dec": 9847,
      "hex": "2677",
      "entity": "",
      "name": "RECYCLING SYMBOL FOR TYPE-5 PLASTICS"
  },
  {
      "char": "♸",
      "dec": 9848,
      "hex": "2678",
      "entity": "",
      "name": "RECYCLING SYMBOL FOR TYPE-6 PLASTICS"
  },
  {
      "char": "♹",
      "dec": 9849,
      "hex": "2679",
      "entity": "",
      "name": "RECYCLING SYMBOL FOR TYPE-7 PLASTICS"
  },
  {
      "char": "♺",
      "dec": 9850,
      "hex": "267A",
      "entity": "",
      "name": "RECYCLING SYMBOL FOR GENERIC MATERIALS"
  },
  {
      "char": "♻",
      "dec": 9851,
      "hex": "267B",
      "entity": "",
      "name": "BLACK UNIVERSAL RECYCLING SYMBOL"
  },
  {
      "char": "♼",
      "dec": 9852,
      "hex": "267C",
      "entity": "",
      "name": "RECYCLED PAPER SYMBOL"
  },
  {
      "char": "♽",
      "dec": 9853,
      "hex": "267D",
      "entity": "",
      "name": "PARTIALLY-RECYCLED PAPER SYMBOL"
  },
  {
      "char": "♾",
      "dec": 9854,
      "hex": "267E",
      "entity": "",
      "name": "PERMANENT PAPER SIGN"
  },
  {
      "char": "♿",
      "dec": 9855,
      "hex": "267F",
      "entity": "",
      "name": "WHEELCHAIR SYMBOL"
  }
  ];

  copy(val: string) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);

    alert('Successfully copied.');
  }

  addToFav() {
    this.isFav = true;
    this.favS.addToFavorites(this.item);
  }

}
