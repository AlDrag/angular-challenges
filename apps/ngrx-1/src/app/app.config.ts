import { ApplicationConfig } from '@angular/core';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { ActivityEffects } from './store/activity/activity.effects';
import { UserEffects } from './store/user/user.effects';
import { StatusEffects } from './store/status/status.effects';
export const appConfig: ApplicationConfig = {
  providers: [
    provideStore(reducers),
    provideEffects([ActivityEffects, UserEffects, StatusEffects]),
  ],
};
