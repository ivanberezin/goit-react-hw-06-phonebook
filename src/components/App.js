import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import './App.css';

class App extends Component {

  render() {
    return(
      <>
        <div className="Container">
          <section title="Phonebook" className="Section">
            <CSSTransition in={true} timeout={500} appear classNames="Title-anime" unmountOnExit>
              <h1 className="SectionTitle">Phonebook</h1>
            </CSSTransition>
            <ContactForm />
          </section>
          <section title="Contacts" className="Section">
            <Filter />
            <ContactList />
          </section>
        </div>
      </>
    )
  }
}

export default App;
