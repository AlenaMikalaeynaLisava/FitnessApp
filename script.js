import {header} from './header.js';

webix.ready(function() {
  webix.ui({
    rows: [
      header,
      {
        gravity: 14,
        type: 'clean',
        cols: [
          {
            gravity: 1,
            rows: [
              {template: 'dataview'},
              {template: 'sidebar'},
              {},
            ],
          },
          // sidebar
          {
            gravity: 4,
            type: 'space',
            rows: [
              {template: 'toolbar', gravity: 1},
              {
                gravity: 3,
                cols: [
                  {template: 'chart'},
                  {template: 'dataview'},
                  {template: 'dataview'},
                  {template: 'dataview'},
                  {template: 'dataview'},
                  {template: 'dataview'},
                ],
              },
              {
                gravity: 4,
                cols: [
                  {rows: [
                    {template: 'template'},
                    {template: 'chart'},
                    {template: 'chart'},
                    {template: 'chart'}, // ...
                  ],
                  },
                  {rows: [
                    {template: 'toolbar'},
                    {template: 'chart'},
                  ],
                  },
                  {rows: [
                    {template: 'toolbar'},
                    {template: 'chart'},
                  ],
                  },
                ],
              },
              {
                gravity: 4,
                cols: [
                  {template: 'carousel'},
                  {rows: [
                    {template: 'toolbar'},
                    {template: 'chart'},
                  ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  });
});
