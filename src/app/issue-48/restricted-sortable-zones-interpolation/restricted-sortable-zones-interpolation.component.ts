import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-restricted-sortable-zones-interpolation',
  templateUrl: './restricted-sortable-zones-interpolation.component.html',
  styleUrls: ['./restricted-sortable-zones-interpolation.component.css']
})
export class RestrictedSortableZonesInterpolationComponent implements OnInit {
  list1 = [
    'Item 1.1',
    'Item 1.2',
    'Item 1.3',
    'Item 1.4',
    'Item 1.5',
  ];

  list2 = [
    'Item 2.1',
    'Item 2.2',
    'Item 2.3',
    'Item 2.4',
    'Item 2.5',
  ];

  categories: any = [
    {
      name: 'Category 1',
      id: 'abc123',
      items:
          [
            'Item 1.1',
            'Item 1.2',
            'Item 1.3',
            'Item 1.4',
            'Item 1.5',
          ]
    },
    {
      name: 'Category 2',
      id: 'def456',
      items:
          [
            'Item 2.1',
            'Item 2.2',
            'Item 2.3',
            'Item 2.4',
            'Item 2.5',
          ]
    },
  ];

  constructor() {}

  ngOnInit() {}

  getZonesForCategory(category: any): string[] {
    return [category.id];
  }
}
