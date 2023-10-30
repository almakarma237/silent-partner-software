export type Filter = Array<{
    field: string;
    term: string;
}>

export const searchFilter = (filter:Filter): string=>{
    var searchFilter: string = '';

    for (const element of filter) {
      searchFilter += '&filter[' + element.field + ']=' + element.term;
    }

    return searchFilter;
}