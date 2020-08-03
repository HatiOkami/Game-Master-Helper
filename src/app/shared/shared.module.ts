import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { BallotBoxComponent } from './component/ballot-box/ballot-box.component';
import { ChooserComponent } from './component/chooser/chooser.component';
import { DocDepositComponent } from './component/doc-deposit/doc-deposit.component';
import { ModalModule } from './component/modal/modal.module';
import { DEFAULT_CONFIG, ENV_CONFIG } from './environment';
import { HeaderComponent } from './layout/header/header.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { JoinDataListPipe } from './pipes/join-data-list.pipe';
import { HttpApiService } from './services/http-api.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ModalModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  declarations: [
    BallotBoxComponent,
    ChooserComponent,
    DocDepositComponent,
    HeaderComponent,
    NavigationComponent,
    JoinDataListPipe,
  ],
  exports: [
    BallotBoxComponent,
    ChooserComponent,
    DocDepositComponent,
    HeaderComponent,
    ModalModule,
    NavigationComponent,
    NgxDatatableModule,
    JoinDataListPipe,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {
  public static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [HttpApiService, { provide: ENV_CONFIG, useValue: DEFAULT_CONFIG }],
    };
  }
}
