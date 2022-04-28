import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: BlogListComponent },
        { path: 'blogs/:blogId', component: ContentComponent },

    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    BlogListComponent,
    ContentComponent
  ],
  bootstrap: [ AppComponent ],
  providers: []
})
export class AppModule { }
