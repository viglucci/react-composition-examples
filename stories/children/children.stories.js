import React from 'react';

import { storiesOf } from '@storybook/react';

import MappedChildren from './examples/MappedChildren';
import DeclarativeChildren from './examples/DeclarativeChildren';

storiesOf('Patterns|Children', module)
  .add('Declarative Children', () => {
    return <MappedChildren />;
  })
  .add('Mapped Children', () => {
    return <DeclarativeChildren />;
  });
