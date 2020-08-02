import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PokedexModule } from './inventory/inventory.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { PokedexRoutingModule } from './inventory/inventory-routing.module';
import { CoreRoutingModule } from './core/core-routing.module';
import { CanDeactivateGuard } from './inventory/edit-info/can-deactivate-guard.service';
import { inventoryReducer } from './@ngrx/inventory.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { InventoryEffects } from './@ngrx/inventory.effects';
import { AuthGuard } from './auth.guard';
import { SetHeaderInterceptor } from './set-header.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PokedexModule,
    PokedexRoutingModule,
    CoreRoutingModule,
    StoreModule.forRoot({inventory: inventoryReducer}, {​
      runtimeChecks: {​
      strictStateImmutability: true,​
      strictActionImmutability: true,​
      strictStateSerializability: true,
      strictActionSerializability: true​
      }​
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([InventoryEffects])​
  ],
  providers: [CanDeactivateGuard, AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: SetHeaderInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
