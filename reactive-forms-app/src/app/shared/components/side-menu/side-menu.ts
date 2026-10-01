import { Component } from '@angular/core';
import {reactiveRoutes} from '../../../reactive/reactive.routes';
import { MenuItem } from '../../interfaces/menu.interface';
import { RouterLink, RouterLinkActive } from '@angular/router';


const reactiveItems = reactiveRoutes[0].children ?? []
@Component({
  selector: 'app-side-menu',
  imports: [RouterLink, RouterLinkActive],
  standalone:true,
  templateUrl: './side-menu.html',
})
export class SideMenu {
  reactiveMenu: MenuItem[] = reactiveItems.filter((item)=> item.path !== '**')
  .map(item => ({
    route: `reactive/${item.path}`,
    title: `${item.title}`,
  }))

  authMenu:MenuItem[] = [{
    title: 'Registro',
    route: './auth'
  }]
   countryMenu:MenuItem[] = [{
    title: 'paises',
    route: './country'
  }]

}
