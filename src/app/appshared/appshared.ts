import { Injectable } from '@angular/core';

@Injectable()
export class Globals {

  public static color: string = "blue";
  public static colors: Array<string> = ["yellow", "black", "red", "blue", "green", "magenta"];

  public static randomColor(): string {

    let rnd = Math.floor(Math.random() * this.colors.length); 
    return this.colors[rnd];

  };

}

