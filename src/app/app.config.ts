import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { routes } from './app.routes';
import { TodosReducer } from './store/reducers/todo.reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
  provideStore({ todos: TodosReducer })]
};
