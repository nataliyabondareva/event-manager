import React from 'react'
import {connect} from 'react-redux'
import EventDetails from './EventDetails'
import {loadEvent, deleteEvent} from '../actions/events'

class EventDetailsContainer extends React.Component {
  componentDidMount() {
    this.props.loadEvent(Number(this.props.match.params.id))
  }

  onChange = (event) => {
    this.setState({
      formValues: {
        ...this.state.formValues,
        [event.target.name]: event.target.value
      }
    })
  }
  
  onDelete = () => {
    this.props.deleteEvent(this.props.event.id)
    this.props.history.push('/')
  }

  render() {
    const {event} = this.props
    return (<EventDetails
      onDelete={this.onDelete}
      event={this.props.event}
    />)
  }
}

const mapStateToProps = state => {
  return {
    event: state.event
  }
}

export default connect(mapStateToProps, {loadEvent, deleteEvent})(EventDetailsContainer)