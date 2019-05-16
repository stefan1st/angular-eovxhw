import { Component } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';

  options: GridsterConfig;
  dashboard: Array<GridsterItem>;

  static itemChange(item, itemComponent) {
    console.info('itemChanged', item, itemComponent);
  }

  static itemResize(item, itemComponent) {
    console.info('itemResized', item, itemComponent);
  }

  ngOnInit() {
    this.options = {
      itemChangeCallback: AppComponent.itemChange,
      itemResizeCallback: AppComponent.itemResize,
      displayGrid: "always",
      resizable: {
        enabled: false
      },
      margin: 0,
      outerMargin: false,
      gridType: "fit",
      compactType: "none",
      pushItems: true,
      draggable: {
        enabled: false,
      },
      emptyCellDragMaxRows: 0,
      maxCols: 12,
      maxRows: 25,
      minCols: 12,
      minRows: 25,
      outerMarginTop: 10,
      outerMarginRight: 10,
      outerMarginLeft: 10,
      outerMarginBotom: 10,
    };

    this.dashboard = [
      { cols: 2, rows: 1, y: 0, x: 0 },
      { cols: 2, rows: 2, y: 0, x: 2 }
    ];
  }

  changedOptions() {
    this.options.api.optionsChanged();
  }

  removeItem(item) {
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem() {
    this.dashboard.push({});
  }
}
