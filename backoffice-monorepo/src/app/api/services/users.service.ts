/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { userControllerCreate } from '../fn/users/user-controller-create';
import { UserControllerCreate$Params } from '../fn/users/user-controller-create';
import { userControllerFindAll } from '../fn/users/user-controller-find-all';
import { UserControllerFindAll$Params } from '../fn/users/user-controller-find-all';
import { userControllerFindOne } from '../fn/users/user-controller-find-one';
import { UserControllerFindOne$Params } from '../fn/users/user-controller-find-one';
import { userControllerGetAdminData } from '../fn/users/user-controller-get-admin-data';
import { UserControllerGetAdminData$Params } from '../fn/users/user-controller-get-admin-data';
import { userControllerGetProfile } from '../fn/users/user-controller-get-profile';
import { UserControllerGetProfile$Params } from '../fn/users/user-controller-get-profile';
import { userControllerRemove } from '../fn/users/user-controller-remove';
import { UserControllerRemove$Params } from '../fn/users/user-controller-remove';
import { userControllerUpdate } from '../fn/users/user-controller-update';
import { UserControllerUpdate$Params } from '../fn/users/user-controller-update';

@Injectable({ providedIn: 'root' })
export class UsersService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `userControllerFindAll()` */
  static readonly UserControllerFindAllPath = '/users';

  /**
   * Obtener todos los usuarios.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userControllerFindAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  userControllerFindAll$Response(params?: UserControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return userControllerFindAll(this.http, this.rootUrl, params, context);
  }

  /**
   * Obtener todos los usuarios.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `userControllerFindAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  userControllerFindAll(params?: UserControllerFindAll$Params, context?: HttpContext): Observable<void> {
    return this.userControllerFindAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `userControllerCreate()` */
  static readonly UserControllerCreatePath = '/users';

  /**
   * Crear usuario.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userControllerCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userControllerCreate$Response(params: UserControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return userControllerCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * Crear usuario.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `userControllerCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userControllerCreate(params: UserControllerCreate$Params, context?: HttpContext): Observable<void> {
    return this.userControllerCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `userControllerGetProfile()` */
  static readonly UserControllerGetProfilePath = '/users/profile';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userControllerGetProfile()` instead.
   *
   * This method doesn't expect any request body.
   */
  userControllerGetProfile$Response(params?: UserControllerGetProfile$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return userControllerGetProfile(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `userControllerGetProfile$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  userControllerGetProfile(params?: UserControllerGetProfile$Params, context?: HttpContext): Observable<void> {
    return this.userControllerGetProfile$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `userControllerGetAdminData()` */
  static readonly UserControllerGetAdminDataPath = '/users/admin';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userControllerGetAdminData()` instead.
   *
   * This method doesn't expect any request body.
   */
  userControllerGetAdminData$Response(params?: UserControllerGetAdminData$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return userControllerGetAdminData(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `userControllerGetAdminData$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  userControllerGetAdminData(params?: UserControllerGetAdminData$Params, context?: HttpContext): Observable<void> {
    return this.userControllerGetAdminData$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `userControllerFindOne()` */
  static readonly UserControllerFindOnePath = '/users/{id}';

  /**
   * Obtener usuario por ID.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userControllerFindOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  userControllerFindOne$Response(params: UserControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return userControllerFindOne(this.http, this.rootUrl, params, context);
  }

  /**
   * Obtener usuario por ID.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `userControllerFindOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  userControllerFindOne(params: UserControllerFindOne$Params, context?: HttpContext): Observable<void> {
    return this.userControllerFindOne$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `userControllerUpdate()` */
  static readonly UserControllerUpdatePath = '/users/{id}';

  /**
   * Actualizar usuario.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userControllerUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userControllerUpdate$Response(params: UserControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return userControllerUpdate(this.http, this.rootUrl, params, context);
  }

  /**
   * Actualizar usuario.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `userControllerUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userControllerUpdate(params: UserControllerUpdate$Params, context?: HttpContext): Observable<void> {
    return this.userControllerUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `userControllerRemove()` */
  static readonly UserControllerRemovePath = '/users/{id}';

  /**
   * Eliminar usuario.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userControllerRemove()` instead.
   *
   * This method doesn't expect any request body.
   */
  userControllerRemove$Response(params: UserControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return userControllerRemove(this.http, this.rootUrl, params, context);
  }

  /**
   * Eliminar usuario.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `userControllerRemove$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  userControllerRemove(params: UserControllerRemove$Params, context?: HttpContext): Observable<void> {
    return this.userControllerRemove$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
