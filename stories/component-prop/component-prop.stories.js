import React from 'react';

import { storiesOf } from '@storybook/react';

import ExampleOne from './examples/ExampleOne';

storiesOf('Patterns|Component Prop', module).add('Example One', () => {
  return <ExampleOne />;
});
