import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/product.service';
import { Product } from 'src/app/product.model';
import { HttpClientModule} from '@angular/common/http'
// import { FormsModule } from '@angular/forms';
import {Database,set,ref} from '@angular/fire/database';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
//  public profileForm:FormGroup ;
  
  constructor( public httpclient : HttpClientModule,
    private firestore: AngularFirestore,
    public productService: ProductService,
    public formBuilder: FormBuilder,
    public database: Database
  ){

  // this.profileForm = this.formBuilder.group({
  //   CategoryName: []
  
  // });

  
}
  ngOnInit(): void {
  }

  createCategory(value:any){
   
    set(ref(this.database, 'users/' + value.categoryName), {
     
      categoryName: value.categoryName
    });
    alert("value added")
  }

}



