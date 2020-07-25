import React, { useState } from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => {
  const [ state, setState ] = useState({
    move: '',
    password: '',
  })

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState(prevState => ({
      ...prevState,
      [id]: value
    }))
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
      This route has { props.items.length } moves.
      { props.items.map(item => <ListItem item={item}/>)}
    </div>
  )
}

export default List;