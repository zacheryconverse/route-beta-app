import React from 'react';

const ListItem = ({ item }) => (
  <div>
    {item.moveId}. { item.move }
  </div>
)

export default ListItem;
