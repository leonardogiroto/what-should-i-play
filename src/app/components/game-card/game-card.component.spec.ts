import { TestBed } from '@angular/core/testing';
import { AngularMaterialModule } from 'src/app/material.module';
import { Game } from 'src/assets/games';
import { GameCardComponent } from './game-card.component';

const MOCK_GAME_NOTAG: Game = {
  name: 'Mock',
  description: 'Mock description',
  link: 'https://www.mocklink.com/',
  duration: 'variable',
  minNumberOfPlayers: 2,
  maxNumberOfPlayers: 4,
};

const MOCK_GAME_TAGGED: Game = {
  ...MOCK_GAME_NOTAG,
  minNumberOfPlayers: 4,
  maxNumberOfPlayers: undefined,
  tags: ['jogo de cartas'],
};

describe('GameCardComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        GameCardComponent,
      ],
      imports: [
        AngularMaterialModule,
      ]
    }).compileComponents();
  });

  it('should render the game name', () => {
    const fixture = TestBed.createComponent(GameCardComponent);
    fixture.componentInstance.game = MOCK_GAME_NOTAG;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.mat-card-title').textContent).toContain(MOCK_GAME_NOTAG.name);
  });

  it('should render the game number of players', () => {
    const fixture = TestBed.createComponent(GameCardComponent);

    fixture.componentInstance.game = MOCK_GAME_NOTAG;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.mat-card-subtitle').textContent).toContain(
      `De ${MOCK_GAME_NOTAG.minNumberOfPlayers} a ${MOCK_GAME_NOTAG.maxNumberOfPlayers} jogadores`
    );

    fixture.componentInstance.game = MOCK_GAME_TAGGED;
    fixture.detectChanges();
    expect(compiled.querySelector('.mat-card-subtitle').textContent).toContain(
      `${MOCK_GAME_TAGGED.minNumberOfPlayers}+ jogadores`
    );
  });

  it('should render the game description', () => {
    const fixture = TestBed.createComponent(GameCardComponent);
    fixture.componentInstance.game = MOCK_GAME_NOTAG;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.mat-card-content p').textContent).toContain(MOCK_GAME_NOTAG.description);
  });

  it('should not render tags if the game does not have it', () => {
    const fixture = TestBed.createComponent(GameCardComponent);
    fixture.componentInstance.game = MOCK_GAME_NOTAG;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.mat-chip-list')).toBeNull();
  });

  it('should render the game tags if the game has it', () => {
    const fixture = TestBed.createComponent(GameCardComponent);
    fixture.componentInstance.game = MOCK_GAME_TAGGED;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.mat-chip-list')).not.toBeNull();
  });
});
