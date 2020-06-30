import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BallotBoxComponent } from './component/ballot-box/ballot-box.component';
import { CardComponent } from './component/card/card.component';
import { DEFAULT_CONFIG, ENV_CONFIG } from './environment';
import { HttpApiService } from './services/http-api.service';

@NgModule({
  imports: [CommonModule, FormsModule, HttpClientModule, ReactiveFormsModule, RouterModule],
  declarations: [BallotBoxComponent, CardComponent],
  exports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class SharedModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [HttpApiService, { provide: ENV_CONFIG, useValue: DEFAULT_CONFIG }],
    };
  }
}
