import React from 'react';

import { storiesOf } from '@storybook/react';

import ExampleOne from './examples/ExampleOne';
import ExampleTwo from './examples/ExampleTwo';

storiesOf('Patterns|Render Prop', module)
  .add('Example 1', () => {
    return <ExampleOne />;
  })
  .add('Example 2', () => {
    return <ExampleTwo />;
  });
