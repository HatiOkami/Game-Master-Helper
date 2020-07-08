import { Pipe, PipeTransform } from '@angular/core';
import { DataListItem } from 'src/app/model/entities';

@Pipe({
  name: 'joinDataList',
})
export class JoinDataListPipe implements PipeTransform {
  constructor() {}

  transform(items: DataListItem[]): string {
    return items.length > 0
      ? items
          .map(x => x.name)
          .sort((a, b) => a.localeCompare(b))
          .join(', ')
      : null;
  }
}
