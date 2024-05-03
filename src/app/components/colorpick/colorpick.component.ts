import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colorpick',
  templateUrl: './colorpick.component.html',
  styleUrls: ['./colorpick.component.scss']
})
export class ColorpickComponent implements OnInit {

  private storageKey = 'user-background';
  private defaultColor = '#bedac9';
  userBackgroundColor: any;

  ngOnInit(): void {
    this.loadBackgroundPreferences();
  }

  private loadBackgroundPreferences(): void {
    this.defaultColor = this.getBackgroundColor();
    window.document.body.style.backgroundColor = this.getBackgroundColor()
  }
  removePreferences(): void {
    localStorage.removeItem(this.storageKey);
    this.loadBackgroundPreferences();
  }
  saveBackgroundColor(color: string): void {
    localStorage.setItem(this.storageKey, color);
    this.loadBackgroundPreferences();
  }
  private getBackgroundColor(): string {
    return localStorage.getItem(this.storageKey) || this.defaultColor;
  }
  }
  

