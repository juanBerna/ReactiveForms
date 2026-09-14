import { Routes } from "@angular/router";
import { BasiPage } from "./pages/basi-page/basi-page";
import { DynamicPage } from "./pages/dynamic-page/dynamic-page";
import { SwitchesPages } from "./pages/switches-pages/switches-pages";

export const reactiveRoutes:Routes = [

      {
        path:'login',
        children: [
          {
            path: 'basic',
            title: 'Basicos',
            component: BasiPage
          },{
            path: 'dynamic',
            title: 'Dinamicos',
            component: DynamicPage
          },{
            path: 'switches',
            title: 'Switches',
            component: SwitchesPages
          },
          {
            path:'**',
            redirectTo: 'basic'
          }
        ]
      },

]
