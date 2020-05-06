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

const uiComponents = [
  AddPeopleComponent,
  FooterComponent,
  MainTileComponent,
  NavbarComponent,
  SmallAdComponent,
  SmallTileComponent,
  IntroductionComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    uiComponents
  ],
  exports: [
    uiComponents
  ]
})
export class SharedModule { }
