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
  public repos: Repositories[];
  public totalRepo: number = 0;
  public selectedValue: string;
  public sortValues: sort[] = [
    {value: 'forks', viewValue: 'Mosts forks'},
    {value: 'stars', viewValue: 'Mosts Stars'},
  ];

  public languages: language[] = [
    {
      name: 'JavaScript',
      quantity: 213
    },
    {
      name: 'PHP',
      quantity: 213
    },
    {
      name: 'Java',
      quantity: 213
    }
  ];
  private searchTerms$$: Subject<string> = new Subject<string>();

  public constructor(private _githubService: GithubService) {}

  public search(term: string): void {
    console.log(term);
    this.searchTerms$$.next(term);
  }

  public ngOnInit(): void {
    this.searchTerms$$
      .distinctUntilChanged()
      .filter((term: string) => term.trim() !== '')
      .switchMap((term: string) => this._githubService.searchRepo(term))
      .subscribe((data: RepoResponse) => {
        this.repos = data.items as Repositories[];
        this.totalRepo = data.total_count;
        console.log(data);
      });
  }
}
