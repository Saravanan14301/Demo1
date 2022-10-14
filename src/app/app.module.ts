import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import {MatIconModule} from '@angular/material/icon';
import { AppComponent } from './app.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { RestComponent } from './rest/rest.component';
import { MallComponent } from './mall/mall.component';
import { MoviesComponent } from './movies/movies.component';
import { ExitComponent } from './exit/exit.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'rest',component:RestComponent},
  {path:'mall',component:MallComponent},
  {path:'movies',component:MoviesComponent},
  {path:'exit',component:ExitComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RestComponent,
    MallComponent,
    MoviesComponent,
    ExitComponent
  ],
  imports: [
    BrowserModule,MatCardModule,MatToolbarModule,MatButtonModule,MatIconModule,MatSidenavModule,
    AppRoutingModule,MatListModule,RouterModule.forRoot(routes),MatFormFieldModule,MatInputModule,
    BrowserAnimationsModule,MatSelectModule,MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
