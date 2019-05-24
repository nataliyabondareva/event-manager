import React from 'react'
import { Link } from 'react-router-dom'

export default function EventsList (props) {
  const { events } = props
  return !events ? (
    <div>Loading</div>
  ) : (
    <div className='events-list'>
      <h3>Some events</h3>
      <div>
        {events.map(event => (
          <li key={event.id}>
            <Link to={`/events/${event.id}`}>{event.name}</Link>
          </li>
        ))}{' '}
      </div>
    </div>
  )
}
