import { Pipe, PipeTransform } from '@angular/core';
import { DataList } from 'src/app/model/entities';

@Pipe({
  name: 'joinDataList',
})
export class JoinDataListPipe implements PipeTransform {
  constructor() {}

  transform(items: DataList[]): string {
    return items.length > 0
      ? items
          .map(x => x.label)
          .sort((a, b) => a.localeCompare(b))
          .join(', ')
      : null;
  }
}
