import React, { Component, Fragment } from 'react';
import { Consumer } from '../Context';
import axios from 'axios';
import { Link } from 'react-router-dom'

export default class Contact extends Component {

  handleClickDelete = async (dispatch, id) => {
    let action = {
      type: 'DELETE_CONTACT',
      payload: id
    }

    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch(action);
    } catch (e) {
      dispatch(action);
    }

  }

  render() {
    return (
      <Consumer>
        {
          value => {
            const { contacts, dispatch } = value;
            return (
              <Fragment>
                {
                  contacts.map(contact => {
                    return (
                      <div key={contact.id} style={{ marginTop: 10 }}>
                        <div>
                          <div>{contact.name}</div>
                          <div>{contact.email}</div>
                          <div>{contact.phone} </div>
                        </div>

                        <Link to={`contact/edit/${contact.id}`}>
                          Edit
                        </Link>

                        <button style={{ display: 'inlineBlock', marginLeft: '10px' }} onClick={() => this.handleClickDelete(dispatch, contact.id)}>
                          Remove
                        </button>
                      </div>
                    )
                  })
                }
              </Fragment>
            )
          }
        }
      </Consumer>
    )
  }
}