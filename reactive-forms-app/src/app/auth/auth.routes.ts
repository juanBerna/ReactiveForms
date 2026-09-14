import { Routes } from "@angular/router";
import { RegisterPage } from "./pages/register-page/register-page";

export const authRoutes:Routes = [
  {
    path:'',
    children:[
      {
        path:'login',
        component: RegisterPage
      },
      {
        path:'**',
        redirectTo: 'login'
      }
    ]
  }
]

export default authRoutes;
