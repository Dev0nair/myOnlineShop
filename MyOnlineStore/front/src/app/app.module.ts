import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// componentes de la pagina
import { NavComponent } from './componentes/navegador_component/nav.component';
import { LoginComponent } from './componentes/login_component/login.component';
import { IndexComponent } from './componentes/index_component/index.component';
import { PropsComponent } from './componentes/props_component/props.component';
import { ChatsComponent } from './componentes/chats_component/chats.component';

// firebase imports
import { AngularFireModule } from 'angularfire2';

// firebase things
const firebaseConfig = {
  apiKey: 'AIzaSyCixIR7pgkCui6-ZGtzNvEVxR6n-SJRGRc',
  authDomain: 'proyecto-de-prueba-475cc.firebaseapp.com',
  databaseURL: 'https://proyecto-de-prueba-475cc.firebaseio.com',
  projectId: 'proyecto-de-prueba-475cc',
  storageBucket: 'proyecto-de-prueba-475cc.appspot.com',
  messagingSenderId: '933836754109',
  appId: '1:933836754109:web:b3b514b6d5a52587'
};

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    IndexComponent,
    PropsComponent,
    ChatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent, NavComponent]
})

export class AppModule { }
