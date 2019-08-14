import React, { Component } from 'react'
import { Consumer } from '../Context';
import TextInputGroup from '../Layout/TextInputGroup';
import axios from 'axios';

export default class EditContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {},
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    let res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    let contact = res.data;
    this.setState({
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
    })
  }

  onTextChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = async (e, dispatch) => {
    e.preventDefault();
    const { name, email, phone } = this.state;
    const { id } = this.props.match.params;
    // check for errors

    if (name === '') {
      this.setState({
        errors: {
          name: 'Name is required'
        }
      });
      return;
    }

    if (email === '') {
      this.setState({
        errors: {
          email: 'Email is required'
        }
      });
      return;
    }

    if (phone === '') {
      this.setState({
        errors: {
          phone: 'Phone is required'
        }
      });
      return;
    }

    let updContact = {
      email,
      name,
      phone
    }

    let res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updContact);
    dispatch({ type: 'UPDATE_CONTACT', payload: res.data });

    this.props.history.push('/');
  }

  render() {
    const { name, email, phone, errors } = this.state;
    return (
      <Consumer>
        {
          value => {
            const { dispatch } = value;
            return (
              <div className='card mb-3'>
                <div className='card-header'>
                  Edit Contact
                </div>
                <div className='card-body'>
                  <form onSubmit={(e) => this.onSubmit(e, dispatch)}>
                    <TextInputGroup
                      label='Name'
                      name='name'
                      onChange={this.onTextChange}
                      placeholder='Enter name...'
                      value={name}
                      error={errors.name}
                    />

                    <TextInputGroup
                      label='Email'
                      name='email'
                      onChange={this.onTextChange}
                      placeholder='Enter email...'
                      value={email}
                      error={errors.email}
                      type='email'
                    />

                    <TextInputGroup
                      label='Phone'
                      name='phone'
                      onChange={this.onTextChange}
                      placeholder='Enter phone number...'
                      value={phone}
                      error={errors.phone}
                    />

                    <input
                      type='submit'
                      value='Update contact'
                      className='btn btn-block btn-primary' />
                  </form>
                </div>
              </div>
            )
          }
        }
      </Consumer>
    )
  }
}
