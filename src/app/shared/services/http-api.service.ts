import { Injectable, Inject, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ENV_CONFIG } from '../environment';
import { EnvConfig } from '../interfaces/env-config';
import { Observable } from 'rxjs';

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
  private _eventEmitter: EventEmitter<HttpApiHelperEvent> = new EventEmitter();

  constructor(private _http: HttpClient, @Inject(ENV_CONFIG) config: EnvConfig) {
    this._apiUri = config.apiUrl;
  }

  protected delete(url: string, params?: any, responseTypeExpected?: string): Observable<any> {
    const httpApiParams = this._manageHttpRequest(url, null, params, responseTypeExpected);
    return this._http.delete(httpApiParams.url, httpApiParams.options);
  }

  // test avec <t>
  protected get(url: string, params?: any, responseTypeExpected?: string): Observable<any> {
    const httpApiParams = this._manageHttpRequest(url, null, params, responseTypeExpected);
    return this._http.get(httpApiParams.url, httpApiParams.options);
  }
  // file upload ?

  protected getApiHeaders(): HttpHeaders {
    const headers = {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    };

    return new HttpHeaders(headers);
  }

  protected patch(url: string, body: any, params?: any, responseTypeExpected?: string): Observable<any> {
    const httpApiParams = this._manageHttpRequest(url, body, params, responseTypeExpected);
    return this._http.patch(httpApiParams.url, httpApiParams.body, httpApiParams.options);
  }

  protected post(url: string, body: any, params?: any, responseTypeExpected?: string): Observable<any> {
    const httpApiParams = this._manageHttpRequest(url, body, params, responseTypeExpected);
    return this._http.post(httpApiParams.url, httpApiParams.body, httpApiParams.options);
  }

  protected put(url: string, body: any, params?: any, responseTypeExpected?: string): Observable<any> {
    const httpApiParams = this._manageHttpRequest(url, body, params, responseTypeExpected);
    return this._http.put(httpApiParams.url, httpApiParams.body, httpApiParams.options);
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
    return this._apiUri + 'api/' + url;
  }
}
