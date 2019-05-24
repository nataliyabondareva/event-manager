import React from 'react'
import { connect } from 'react-redux'
import EventDetails from './EventDetails'
import { loadEvent, deleteEvent, updateEvent } from '../actions/events'

class EventDetailsContainer extends React.Component {
  state = {
    editMode: false,
    valuesAssigned: false,
    formValues: {
      name: '',
      date: '',
      description: ''
    }
  }

  componentDidMount () {
    this.props.loadEvent(Number(this.props.match.params.id))
  }

  onChange = (event) => {
    console.log('onChange this.state test:', this.state)
    const { name, value } = event.target

    const newFormValues = { ...this.state.formValues }
    newFormValues[name] = value
    const newState = {
      formValues: newFormValues
    }
    this.setState(newState)

    // this.setState({
    //   formValues: {
    //     ...this.state.formValues,
    //     [name]: value
    //   }
    // })
  }

  onDelete = () => {
    this.props.deleteEvent(this.props.event.id)
    this.props.history.push('/')
  }

  onSubmit = event => {
    event.preventDefault()

    console.log('submit test!')

    this.toggleForm()
    this.props.updateEvent(this.props.event.id, this.state.formValues)
  }

  toggleForm = () => {
    const toggled = !this.state.editMode

    const update = { editMode: toggled }

    if (!this.state.valuesAssigned) {
      update.formValues = this.props.event
      update.valuesAssigned = true
    }

    this.setState(update)
  }

  render () {
    console.log('EventDetailsContainer this.props test:', this.props)
    const { event } = this.props

    return (<EventDetails
      onDelete={this.onDelete}
      onChange={this.onChange}
      onSubmit={this.onSubmit}
      formValues={this.state.formValues}
      editMode={this.state.editMode}
      toggleForm={this.toggleForm}
      event={event}
    />)
  }
}

const mapStateToProps = state => {
  console.log('mapStateToProps state test:', state)
  return {
    event: state.event
  }
}

const mapDispatchToProps = {
  loadEvent,
  deleteEvent,
  updateEvent
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventDetailsContainer)
