import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Game } from 'src/assets/games';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public playersControl = new FormControl('');
  public durationControl = new FormControl('');
  public filteredGameList: Array<Game> = [];

  constructor(
    private _appService: AppService,
  ) { }

  ngOnInit(): void {
    this.filteredGameList = this._appService.getGamesList();

    this.playersControl.valueChanges.subscribe((playersCount) => {
      const duration = this.durationControl.value;

      this.filteredGameList = this._appService.getGamesList(
        playersCount,
        duration,
      );
    });

    this.durationControl.valueChanges.subscribe((duration) => {
      const playersCount = this.playersControl.value;

      this.filteredGameList = this._appService.getGamesList(
        playersCount,
        duration,
      );
    });
  }

}
