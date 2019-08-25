import React from 'react';

import { storiesOf } from '@storybook/react';

import ExampleOne from './examples/ExampleOne';

storiesOf('Patterns|Function as a Child', module).add(
  'Consuming API Data',
  () => {
    return <ExampleOne />;
  }
);
