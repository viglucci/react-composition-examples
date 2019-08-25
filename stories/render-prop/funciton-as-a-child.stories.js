import React from 'react';

import { storiesOf } from '@storybook/react';

import RenderStrategy from './examples/RenderStrategy';
import ExampleTwo from './examples/ExampleTwo';

storiesOf('Patterns|Render Prop', module)
  .add('Simple Render Strategy', () => {
    return <RenderStrategy />;
  })
  .add('Complex Render Strategy', () => {
    return <ExampleTwo />;
  });
