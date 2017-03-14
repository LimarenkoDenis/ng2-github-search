type language = {
  name: string,
  quantity: number
}
type sort = {
  value: string,
  viewValue: string;
}
type Parameters = {
  q: {
    term: string,
    language?: string| null,
  }
  sort: 'stars' | 'forks' | 'updated',
  order: 'asc' | 'desc'
}
type Repositories = {
  id: number
}
type RepoResponse = {
  total_count: number,
  items: Repositories[]
}

