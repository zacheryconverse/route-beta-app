// import React, { useState } from 'react';
import React, { Component } from 'react';
// import ListItem from './ListItem';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import uuid from 'uuid';

// const List = ({ items }) => {
//   const [state, setState] = useState({
//     moves: [],
//   });

class List extends Component {
  state = {
    moves: [
      { id: uuid(), name: 'left sidepull' },
      { id: uuid(), name: 'right crimp' },
      { id: uuid(), name: 'bump right to jug' },
      { id: uuid(), name: 'match' },
    ],
  };

  render() {
    const { moves } = this.state;
    return (
      <Container>
        <Button
          color="dark"
          style={{ marginBottom: '2rem', marginTop: '2rem' }}
          onClick={() => {
            const name = prompt('Enter Move');
            if (name) {
              this.setState((state) => ({
                moves: [...state.moves, { id: uuid(), name }],
              }));
            }
          }}
        >
          Add a Move
        </Button>

        <ListGroup>
            {moves.map(({ id, name }) => (

                <ListGroupItem key={id}>
                  <Button
                    className="edit-btn"
                    color="info"
                    size="sm"
                    onClick={() => {
                      this.setState((state) => ({}));
                    }}
                  >
                    -
                  </Button>
                  {name}
                  <Button
                    className="remove-btn"
                    color="warning"
                    size="sm"
                    onClick={() => {
                      this.setState((state) => ({
                        moves: state.moves.filter(move => move.id !== id)
                      }));
                    }}
                  >
                    &times;
                  </Button>
                </ListGroupItem>
            ))}
        </ListGroup>
      </Container>
    );
  }
}

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setState((prevState) => ({
//       ...prevState,
//       [id]: [value],
//     }));
//   };

//   const handleClick = (e) => {
//     e.preventDefault();
//     sendMoveToServer();
//   }

//   const sendMoveToServer = () => {
//     if (state.moves.length) {
//       fetch('/api/moves', ("moves": state.moves))
//     }
//   }

//   return (
//     <div>
//       <form>
//         <div className="">
//           <label></label>
//           <input
//             type="move"
//             className="form-control"
//             id="move"
//             aria-describedby="moveHelp"
//             placeholder="Enter a move"
//             value={state.move}
//             onChange={handleChange}
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Enter
//         </button>
//       </form>
//       This route has
//       {' '}
//       {items.length}
//       {' '}
//       moves.
//       {items.map((item) => (
//         <ListItem item={item} />
//       ))}
//     </div>
//   );
// };

export default List;
