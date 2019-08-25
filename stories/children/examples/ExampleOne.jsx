import React from 'react';

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
    <ul className="list-group">
      {items.map((item, index) => {
        return (
          <li className="list-group-item" key={index}>
            {item.value}
          </li>
        );
      })}
    </ul>
  );
};
