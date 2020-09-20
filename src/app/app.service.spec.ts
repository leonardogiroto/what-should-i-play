import { Game } from 'src/assets/games';
import { AppService } from './app.service';

const MOCK_GAMES_LIST: Array<Game> = [{
  name: 'Mock',
  description: 'Mock description',
  link: 'https://www.mocklink.com/',
  duration: 'fast',
  minNumberOfPlayers: 2,
  maxNumberOfPlayers: 10,
}, {
  name: 'Mock',
  description: 'Mock description',
  link: 'https://www.mocklink.com/',
  duration: 'medium',
  minNumberOfPlayers: 3,
}, {
  name: 'Mock',
  description: 'Mock description',
  link: 'https://www.mocklink.com/',
  duration: 'long',
  maxNumberOfPlayers: 4,
}, {
  name: 'Mock',
  description: 'Mock description',
  link: 'https://www.mocklink.com/',
  duration: 'variable',
  minNumberOfPlayers: 4,
  maxNumberOfPlayers: 8,
}];

describe('AppService', () => {
  let service: AppService;
  beforeEach(() => { service = new AppService(); });

  it('filterByPlayersCount should filter correctly', () => {
    let filteredList = service['_filterByPlayersCount'](MOCK_GAMES_LIST, 2);
    expect(filteredList.length).toBe(1);

    filteredList = service['_filterByPlayersCount'](MOCK_GAMES_LIST, 3);
    expect(filteredList.length).toBe(2);

    filteredList = service['_filterByPlayersCount'](MOCK_GAMES_LIST, 4);
    expect(filteredList.length).toBe(4);

    filteredList = service['_filterByPlayersCount'](MOCK_GAMES_LIST, 10);
    expect(filteredList.length).toBe(2);
  });

  it('filterByDuration should filter correctly', () => {
    let filteredList = service['_filterByDuration'](MOCK_GAMES_LIST, 'fast');
    expect(filteredList.length).toBe(1);

    filteredList = service['_filterByDuration'](MOCK_GAMES_LIST, 'medium');
    expect(filteredList.length).toBe(1);

    filteredList = service['_filterByDuration'](MOCK_GAMES_LIST, 'long');
    expect(filteredList.length).toBe(1);

    filteredList = service['_filterByDuration'](MOCK_GAMES_LIST, 'variable');
    expect(filteredList.length).toBe(1);
  });
});
