import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

function NewMeetupForm() {
  const titleImputRef = useRef();
  const imageImputRef = useRef();
  const addressImputRef = useRef();
  const descriptionImputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleImputRef.current.value;
    const enteredImage = imageImputRef.current.value;
    const enteredAddress = addressImputRef.current.value;
    const enteredDescription = descriptionImputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    console.log(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input ref={titleImputRef} id="title" type="text" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input ref={imageImputRef} id="image" type="url" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Meetup Address</label>
          <input ref={addressImputRef} id="address" type="text" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Meetup description</label>
          <textarea
            ref={descriptionImputRef}
            id="description"
            required
            rows="5"
          ></textarea>{' '}
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
