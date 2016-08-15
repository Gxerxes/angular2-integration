import {Request, Response, Http} from '@angular/http';
import {RESTClient, GET, PUT, POST, DELETE, BaseUrl, Headers, DefaultHeaders, Path, Body, Query, TestUrl} from '../services/RestService';
import {Component, Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";

@Injectable()
@BaseUrl('http://jsonplaceholder.typicode.com')
@TestUrl('test')
@DefaultHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
})
export class TodoRestClient extends RESTClient {

    // protected requestInterceptor(req: Request) {
    //     // if (SessionFactory.getInstance().isAuthenticated) {
    //     //     req.headers.append('jwt', SessionFactory.getInstance().credentials.jwt);
    //     // }
    // }

    protected responseInterceptor(rep: Response): any {
        // do sg with responses
        console.log(rep);
        return rep;
    }

    public constructor(protected http: Http) {
        super(http);
    }

    // @GET("todo/")
    // public getTodos( @Query('sort') sort?: string): Observable<Response> {return null};
    //
    // @GET("todo/{id}")
    // public getTodoById( @Path("id") id: string): Observable<any> { return null; };
    //
    // @POST("todo")
    // public postTodo( @Body todo: any): Observable<any> { return null; };
    //
    // @PUT("todo/{id}")
    // public putTodoById( @Path("id") id: string, @Body todo: any): Observable<any> { return null; };
    //
    // @DELETE("todo/{id}")
    // public deleteTodoById( @Path("id") id: string): Observable<any> { return null; };

    @GET('/posts/{id}')
    public getById( @Path('id') id: string): Observable<any> { return null; };
}