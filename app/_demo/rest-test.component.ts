import {Component} from '@angular/core';
import {Control,
    ControlGroup,
    ControlArray,
    Validators} from '@angular/common';

import {TodoRestClient} from "./TodoRestClient.component";

@Component({
    selector: 'rest-test',
    viewProviders: [TodoRestClient],
    template: `
	
	  <div class="row container">
	  Post Number(enter 1): 
	  <input type="text" placeholder="Post Number" [ngFormControl]="postNumber">
	  <button (click)="fetchPost()">Fetch</button>
	  </div>
	  
	  <div class="row container">Value: {{value}}
	  </div>
	`
})
export class RestTestComponent {

    postNumber:Control;

    post:any;


    constructor(private postService: TodoRestClient){
        this.postNumber = new Control("");
    }

    fetchPost(){
        this.postService.getById(this.postNumber.value).subscribe(res=>{
            this.post = res.json();
        });
    }

    get value(): string {
        if(typeof this.post === 'undefined'){
            return "We don't have a value";
        }
        return JSON.stringify(this.post, null, 2);
    }

}
