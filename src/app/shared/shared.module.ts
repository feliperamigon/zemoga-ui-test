import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Shared Components */
import { AddPeopleComponent } from './add-people/add-people.component';
import { MainTileComponent } from './main-tile/main-tile.component';
import { SmallAdComponent } from './small-ad/small-ad.component';
import { SmallTileComponent } from './small-tile/small-tile.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { RulingsComponent } from './rulings/rulings.component';
import { SubmitCharComponent } from './submit-char/submit-char.component';

/** Shared Services */
import { SharedService } from './shared.service';

/** Angular Material */
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';

const materialModules = [MatSnackBarModule, MatSidenavModule];

const uiComponents = [
  AddPeopleComponent,
  MainTileComponent,
  SmallAdComponent,
  SmallTileComponent,
  IntroductionComponent,
  RulingsComponent,
  SubmitCharComponent,
];

@NgModule({
  imports: [CommonModule, materialModules],
  declarations: [uiComponents],
  exports: [uiComponents],
  providers: [SharedService],
})
export class SharedModule {}
