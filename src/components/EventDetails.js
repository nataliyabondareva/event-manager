import React from 'react'
import { Link } from 'react-router-dom'

export default function EventDetails (props) {
  const {
    event,
    onChange,
    onSubmit,
    formValues,
    editMode,
    toggleForm
  } = props

  const form = editMode
    ? <form onSubmit={onSubmit}>
      <input
        type='text'
        name='name'
        onChange={onChange}
        value={formValues['name']}
        placeholder='name'
      />
      <input
        type='text'
        name='date'
        onChange={onChange}
        value={formValues['date']}
        placeholder='date'
      />
      <input
        type='text'
        name='description'
        onChange={onChange}
        value={formValues['description']}
        placeholder='description'
      />
      <button>Submit</button>
      <button onClick={toggleForm}>Close</button>
    </form>
    : <button onClick={toggleForm}>edit</button>

  return event
    ? <div className='event-details'>
      <h1>{event.name}</h1>
      <i>{event.date}</i>
      <p>{event.description}</p>

      <button onClick={props.onDelete}>Delete</button>

      {form}

      <Link to='/'>Home page</Link>
    </div>
    : <div>Loading</div>
}
