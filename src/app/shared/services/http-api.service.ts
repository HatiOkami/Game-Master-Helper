import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { EventEmitter, Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ENV_CONFIG } from '../environment';
import { EnvConfig } from '../interfaces/env-config';

export interface HttpApiHelperEvent {
  data?: {
    authorizationKey?: string;
    requestInProgress?: number;
  };
  name: string;
}

export interface HttpApiHelperParams {
  body: string;
  options: any;
  url: string;
}

interface HttpApiOptions {
  headers?:
    | HttpHeaders
    | {
        [header: string]: string | string[];
      };
  params?:
    | HttpParams
    | {
        [param: string]: string | string[];
      };
  reportProgress?: boolean;
  responseType?: string;
  withCredentials?: boolean;
}

@Injectable()
export class HttpApiService {
  get eventEmitter(): EventEmitter<HttpApiHelperEvent> {
    return this._eventEmitter;
  }

  private _apiUri: string;
  private _apiVersion: string;
  private _eventEmitter: EventEmitter<HttpApiHelperEvent> = new EventEmitter();

  constructor(private _http: HttpClient, @Inject(ENV_CONFIG) config: EnvConfig) {
    this._apiUri = config.apiUrl;
    this._apiVersion = config.apiVersion;
  }

  public delete(url: string, params?: any, responseTypeExpected?: string): Observable<any> {
    return this._delete(url, params, responseTypeExpected);
  }
  public get(url: string, params?: any, responseTypeExpected?: string): Observable<any> {
    if (params) {
      Object.keys(params).forEach(param => params[param] == null ? delete params[param] : null);
    }

    return this._get(url, params, responseTypeExpected);
  }
  public patch(url: string, body: any, params?: any, responseTypeExpected?: string): Observable<any> {
    return this._patch(url, body, params, responseTypeExpected);
  }
  public post(url: string, body: any, params?: any, responseTypeExpected?: string): Observable<any> {
    return this._post(url, body, params, responseTypeExpected);
  }
  public put(url: string, body: any, params?: any, responseTypeExpected?: string): Observable<any> {
    return this._put(url, body, params, responseTypeExpected);
  }

  protected _delete(url: string, params?: any, responseTypeExpected?: string): Observable<any> {
    const httpApiParams = this._manageHttpRequest(url, null, params, responseTypeExpected);
    return this._http.delete(httpApiParams.url, httpApiParams.options);
  }

  protected _get(url: string, params?: any, responseTypeExpected?: string): Observable<any> {
    const httpApiParams = this._manageHttpRequest(url, null, params, responseTypeExpected);
    return this._http.get(httpApiParams.url, httpApiParams.options);
  }

  protected _patch(url: string, body: any, params?: any, responseTypeExpected?: string): Observable<any> {
    const httpApiParams = this._manageHttpRequest(url, body, params, responseTypeExpected);
    return this._http.patch(httpApiParams.url, httpApiParams.body, httpApiParams.options);
  }

  protected _post(url: string, body: any, params?: any, responseTypeExpected?: string): Observable<any> {
    const httpApiParams = this._manageHttpRequest(url, body, params, responseTypeExpected);
    return this._http.post(httpApiParams.url, httpApiParams.body, httpApiParams.options);
  }

  protected _put(url: string, body: any, params?: any, responseTypeExpected?: string): Observable<any> {
    const httpApiParams = this._manageHttpRequest(url, body, params, responseTypeExpected);
    return this._http.put(httpApiParams.url, httpApiParams.body, httpApiParams.options);
  }

  protected getApiHeaders(): HttpHeaders {
    const headers = {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    };

    return new HttpHeaders(headers);
  }

  private _manageHttpRequest(url: string, body: any, params?: any, responseTypeExpected?: string): HttpApiHelperParams {
    const managedUrl = this.getHttpUri(url);
    const managedBody = this.getHttpBody(body);
    const managedOptions = this.getHttpOptions(params, responseTypeExpected);

    return { url: managedUrl, body: managedBody, options: managedOptions };
  }

  private getHttpBody(body: any): string {
    if (body) {
      return JSON.stringify(body);
    }
  }

  private getHttpOptions(params: any, responseTypeExpected?: string): HttpApiOptions {
    if (!responseTypeExpected) {
      responseTypeExpected = 'json';
    }

    return {
      headers: this.getApiHeaders(),
      responseType: responseTypeExpected,
      params: params || null
    };
  }

  private getHttpUri(url?: string): string {
    return `${this._apiUri}/api/v${this._apiVersion}/${url}`;
  }
}
