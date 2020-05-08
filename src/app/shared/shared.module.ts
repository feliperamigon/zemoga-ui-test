import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Shared Components */
import { AddPeopleComponent } from './add-people/add-people.component';
import { FooterComponent } from './footer/footer.component';
import { MainTileComponent } from './main-tile/main-tile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SmallAdComponent } from './small-ad/small-ad.component';
import { SmallTileComponent } from './small-tile/small-tile.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { RulingsComponent } from './rulings/rulings.component';
import { SubmitCharComponent } from './submit-char/submit-char.component';

/** Shared Services */
import { SharedService } from './shared.service';

/** Pipes */
import { EscapeHtmlPipe } from './pipes/escape-html.pipe';

/** Angular Material */
import { MatSnackBarModule } from '@angular/material/snack-bar';

const materialModules = [
  MatSnackBarModule
];

const uiComponents = [
  AddPeopleComponent,
  FooterComponent,
  MainTileComponent,
  NavbarComponent,
  SmallAdComponent,
  SmallTileComponent,
  IntroductionComponent,
  RulingsComponent,
  SubmitCharComponent
];

@NgModule({
  imports: [
    CommonModule,
    materialModules
  ],
  declarations: [
    uiComponents,
    EscapeHtmlPipe
  ],
  exports: [
    uiComponents
  ],
  providers: [
    SharedService
  ]
})
export class SharedModule { }
