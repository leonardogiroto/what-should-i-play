import { Injectable } from '@angular/core';
import { Game, GamesList } from '../assets/games';

@Injectable()
export class AppService {

  public getGamesList(
    playersCount?: number | string,
    duration?: string
  ): Array<Game> {
    let gamesList = GamesList;

    if (playersCount) {
      gamesList = this._filterByPlayersCount(gamesList, playersCount);
    }

    if (duration) {
      gamesList = this._filterByDuration(gamesList, duration);
    }

    return gamesList;
  }

  private _filterByPlayersCount(games: Array<Game>, playersCount: number | string): Array<Game> {
    return games.filter(game => {
      if (game.maxNumberOfPlayers && !game.minNumberOfPlayers) {
        return playersCount === 'more'
          ? game.maxNumberOfPlayers >= 11
          : game.maxNumberOfPlayers === playersCount;
      }

      const respectsMinNumber = playersCount === 'more'
        ? game.minNumberOfPlayers <= 11
        : game.minNumberOfPlayers <= playersCount;

      if (!game.maxNumberOfPlayers && game.minNumberOfPlayers) {
        return respectsMinNumber;
      }

      const respectsMaxNumber = playersCount === 'more'
        ? game.maxNumberOfPlayers >= 11
        : game.maxNumberOfPlayers >= playersCount;

      return respectsMaxNumber && respectsMinNumber;
    });
  }

  private _filterByDuration(games: Array<Game>, duration: string): Array<Game> {
    return games.filter(game => game.duration === duration);
  }
}
