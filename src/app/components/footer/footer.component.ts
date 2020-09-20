import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  public linkToPR = 'https://github.com/leonardogiroto/what-should-i-play/pulls';
  public linkToFile = 'https://github.com/leonardogiroto/what-should-i-play/blob/master/src/assets/games.ts';

}
