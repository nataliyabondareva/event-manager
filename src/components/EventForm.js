import React from 'react'

export default class EventForm extends React.Component {

  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <label>Name</label>
        <input type="text" name="name" onChange={this.props.onChange}/>

        <label>Date</label>
        <input type="date" name="date" onChange={this.props.onChange}/>

        <label>Description</label>
        <input type="text" name="description" onChange={this.props.onChange}/>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}