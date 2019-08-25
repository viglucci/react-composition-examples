import React from 'react';

const List = ({ Wrapper, items }) => {
  return (
    <Wrapper>
      <ul className="list-group">
        <li className="list-group-item">Item 1</li>
        <li className="list-group-item">Item 2</li>
        <li className="list-group-item">Item 3</li>
      </ul>
    </Wrapper>
  );
};

const WrappWithPadding = ({ children }) => {
  return (
    <div
      style={{
        padding: 10,
      }}
    >
      {children}
    </div>
  );
};

const WrapperWithABackgroundColor = ({ children }) => {
  return (
    <div
      style={{
        padding: 10,
        backgroundColor: 'red',
      }}
    >
      {children}
    </div>
  );
};

export default () => {
  const items = [
    {
      value: 'Item 1',
    },
    {
      value: 'Item 2',
    },
  ];
  return (
    <React.Fragment>
      <List Wrapper={WrappWithPadding} items={items} />
      <List Wrapper={WrapperWithABackgroundColor} items={items} />
    </React.Fragment>
  );
};
