import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css']
})
export class RepoListComponent implements OnInit {
  @Input()
  public repos: Repositories[];

  public constructor() { }

  public ngOnInit(): void {
  }

}
