import { Routes, Route, Resolve } from '@angular/router';
import { ShellComponent } from './shell.component';

/**
 * Provides helper methods to create routes.
 */
export class Shell {
  /**
   * Creates routes using the shell component and authentication.
   * @param routes The routes to add.
   * @return The new route using shell as the base.
   */
  static childRoutes(routes: Routes, resolvers: Record<string, Resolve<any>> = {}): Route {
    return {
      path: '',
      component: ShellComponent,
      children: routes,
    //   canActivate: [AuthenticationGuard, ProductEditionGuard],
      // Reuse ShellComponent instance when navigating between child views
      data: { reuse: true },
      resolve: resolvers,
    };
  }
}
