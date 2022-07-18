import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule} from '@angular/common/http'
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { CategoryComponent } from './Admin/category/category.component';
import { ListingComponent } from './Admin/listing/listing.component';
import { SidebarComponent } from './Admin/sidebar/sidebar.component';
import { environment } from 'src/environments/environment';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule, } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { provideFirebaseApp ,initializeApp} from '@angular/fire/app';
import { getDatabase, provideDatabase } from '@angular/fire/database';




@NgModule({
  declarations: [
    AppComponent,
    
    DashboardComponent,
    CategoryComponent,
    ListingComponent,
    SidebarComponent,
    
    
    
 
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireStorageModule ,// storage
    HttpClientModule,
    provideDatabase(()=>getDatabase()),
    provideFirebaseApp(()=>initializeApp(environment.firebaseConfig))
 

   
    
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
