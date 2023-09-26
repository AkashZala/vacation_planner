import React, { useState } from 'react';


const VacationForm = ({ places, users, bookVacation }) => {
    const [placeId, setPlaceId] = useState('');
    const [userId, setUserId] = useState('');
    const [note, setNote] = useState('');
  
    const save = (ev) => {
      ev.preventDefault();
      const vacation = {
        user_id: userId,
        place_id: placeId,
        note: note
      };
      bookVacation(vacation);
      setPlaceId('');
      setUserId('');
      setNote('');
    }
    return (
      <form onSubmit={save}>
        <select value={userId} onChange={ev => setUserId(ev.target.value)}>
          <option value=''>-- choose a user --</option>
          {
            users.map(user => {
              return (
                <option key={user.id} value={user.id}>{user.name}</option>
              );
            })
          }
        </select>
        <select value={placeId} onChange={ev => setPlaceId(ev.target.value)}>
          <option value=''>-- choose a place --</option>
          {
            places.map(place => {
              return (
                <option key={place.id} value={place.id}>{place.name}</option>
              );
            })
          }
        </select>
        <label>
          <input placeholder='ADD A NOTE' value={note} onChange={event => setNote(event.target.value)} />
        </label>
        <button disabled={!placeId || !userId || !note}>Book Vacation</button>
      </form>
    );
  }

  export default VacationForm;