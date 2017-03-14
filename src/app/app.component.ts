import { GithubService } from './github.service';
import { Component } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public parameters: Parameters = {
    q: {
      term: '',
      language: null
    },
    sort: 'stars',
    order: 'desc'
  };
  public repos: Repositories[];
  public totalRepo: number = 0;
  public sortValues: sort[] = [
    {value: 'forks',    viewValue: 'Mosts forks'},
    {value: 'stars',    viewValue: 'Mosts Stars'},
    {value: 'updated',  viewValue: 'Least recently updated'}
  ];
  public languages: language[] = [
    {
      name: 'typescript',
      quantity: 223
    },
    {
      name: 'JavaScript',
      quantity: 113
    },
    {
      name: 'PHP',
      quantity: 20
    },
    {
      name: 'Java',
      quantity: 12
    }
  ];

  private searchTerms$$: Subject<Parameters> = new Subject<Parameters>();

  public constructor(private _githubService: GithubService) {}

  public search(term: string): void {
    this.parameters.q.term = term;
    this.searchTerms$$.next(this.parameters);
  }
  public changeLanguage(language: string): void {
    this.parameters.q.language = language;
    this.searchTerms$$.next(this.parameters);
  }
  public clearOption(): void {
    this.parameters.q.language = null;
    this.searchTerms$$.next(this.parameters);
  }
  public sort(sort: 'stars' | 'forks' | 'updated'): void {
    this.parameters.sort = sort;
    this.searchTerms$$.next(this.parameters);
  }
  public ngOnInit(): void {
    this.searchTerms$$
      // .distinctUntilChanged()
      // .filter((parameters: Parameters) => parameters.q.term.trim() !== '')
      .switchMap((parameters: Parameters) => this._githubService.searchRepo(parameters))
      .subscribe((data: RepoResponse) => {
        this.repos = data.items as Repositories[];
        this.totalRepo = data.total_count;
      });
  }
}
