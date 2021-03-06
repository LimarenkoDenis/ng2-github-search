import { GithubService } from './github.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Ng2PaginationModule} from 'ng2-pagination';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';
import { RepoListComponent } from './repo-list/repo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RepoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    Ng2PaginationModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
