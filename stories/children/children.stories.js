import React from 'react';

import { storiesOf } from '@storybook/react';

import ExampleOne from './examples/ExampleOne';

storiesOf('Patterns|Children', module).add('Example 1', () => {
  return <ExampleOne />;
});
