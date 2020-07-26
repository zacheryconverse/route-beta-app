import React, { useState } from 'react';
import ListItem from './ListItem';

const List = ({ items }) => {
  const [state, setState] = useState({
    move: [],
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: [value],
    }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    sendMoveToServer();
  }

  const sendMoveToServer = () => {
    if (state.move.length) {
      fetch('/api/moves', ("move": state.move))
    }
  }

  return (
    <div>
      <form>
        <div className="">
          <label>Next Move</label>
          <input
            type="move"
            className="form-control"
            id="move"
            aria-describedby="moveHelp"
            placeholder="Enter a move"
            value={state.move}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Enter
        </button>
      </form>
      This route has
      {' '}
      {items.length}
      {' '}
      moves.
      {items.map((item) => (
        <ListItem item={item} />
      ))}
    </div>
  );
};

export default List;
