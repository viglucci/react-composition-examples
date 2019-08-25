import React from 'react';

import { storiesOf } from '@storybook/react';

import ChildrenArray from './examples/ChildrenArray';
import DeclarativeChildren from './examples/DeclarativeChildren';

storiesOf('Patterns|Children', module)
  .add('Declarative Children', () => {
    return <ChildrenArray />;
  })
  .add('Mapped Children', () => {
    return <DeclarativeChildren />;
  });
