import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private API_URL: string = 'https://api.github.com/search/repositories';
  public constructor(private _http: Http) { }

  public searchRepo(term: string): Observable<RepoResponse> {
    return this._http.get(`${this.API_URL}?q=${term}+language:""&sort=stars&order=desc`)
      .map((res: Response) => res.json());
  }
}
