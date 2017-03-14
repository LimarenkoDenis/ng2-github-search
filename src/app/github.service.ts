import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private API_URL: string = 'https://api.github.com/search/repositories';
  public constructor(private _http: Http) { }

  public searchRepo(parameters: Parameters): Observable<RepoResponse> {
    return this._http
    .get(`${this.API_URL}?q=${parameters.q.term}+language:${parameters.q.language}&sort=${parameters.sort}&order=desc`)
      .map((res: Response) => res.json());
  }
}
