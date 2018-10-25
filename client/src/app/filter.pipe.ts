import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})


export class FilterPipe implements PipeTransform {
    searchresult = false;
  transform(items: any[], searchText: string): any[] {
    this.searchresult = false;
    if ( !items ) { return []; }
    if ( !searchText ) { return []; }
    searchText = searchText.trim().toLowerCase();
    // searchText = searchText.toLowerCase();
    return items.filter( it => {
          this.searchresult = true;
          return it.toLowerCase().includes(searchText);
        });
    }
}
