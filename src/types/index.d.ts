type language = {
  name: string,
  quantity: number
}
type sort = {
  value: string,
  viewValue: string;
}
type Repositories = {
  id: number
}
type RepoResponse = {
  total_count: number,
  items: Repositories[]
}
