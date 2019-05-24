import React from 'react'

export default function EventDetails(props) {
  const { event } = props;
  return ! event ? (
    <div>Loading</div>
  ) : (
    <div className="event-details">
    <h1>{event.name}</h1>
    <i>{event.date}</i>
    <p>{event.description}</p>
    <button onClick={props.onDelete}>Delete</button>
    </div>
  );
}