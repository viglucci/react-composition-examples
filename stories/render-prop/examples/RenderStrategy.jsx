import React from 'react';

const List = ({ items, renderItem }) => {
  return (
    <ul className="list-group">
      {items.map((item, i) => {
        return renderItem(item, i);
      })}
    </ul>
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

  const renderItem = ({ value }, index) => {
    return (
      <li className="list-group-item" key={index}>
        Index {index} - {value}
      </li>
    );
  };

  return <List items={items} renderItem={renderItem} />;
};
