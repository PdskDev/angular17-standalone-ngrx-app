import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { tokenInterceptorInterceptor } from './_service/token-interceptor.interceptor';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { CustomerReducer } from './_store/customers/customers.reducers';
import { CustomerEffects } from './_store/customers/customers.effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([tokenInterceptorInterceptor])),
    provideStore({ customers: CustomerReducer }),
    provideEffects([CustomerEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
],
};
