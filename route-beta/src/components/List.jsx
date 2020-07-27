// import React, { useState } from 'react';
import React, { Component } from 'react';
// import ListItem from './ListItem';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';
import uuid from 'uuid';

// const List = ({ items }) => {
//   const [state, setState] = useState({
//     moves: [],
//   });

class List extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  onDeleteClick = (id) => {
    this.props.deleteItem(id);
  }

  render() {
    const { items } = this.props.item;
    return (
      <Container>
        {/* <Button
          color="dark"
          style={{ marginBottom: '2rem', marginTop: '2rem' }}
          onClick={() => {
            const name = prompt('Enter Move');
            if (name) {
              this.setState((state) => ({
                items: [...state.items, { id: uuid(), name }],
              }));
            }
          }}
        >
          Add a Move
        </Button> */}

        <ListGroup>
          This route has {items.length} moves.
          {items.map(({ _id, name }) => (
            <ListGroupItem key={_id}>
              <Button
                className="edit-btn"
                color="secondary"
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
                onClick={this.onDeleteClick.bind(this, _id)}
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

List.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  item: state.item,
});

export default connect(mapStateToProps, { getItems, deleteItem })(List);

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
// This route has
// {' '}
// {items.length}
// {' '}
// moves.
//       {items.map((item) => (
//         <ListItem item={item} />
//       ))}
//     </div>
//   );
// };
