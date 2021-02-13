import React, {Component} from 'react';
import {createContext} from 'react';
import {Alert} from 'react-native';

const NoteContent = createContext();

export class NotePrivider extends Component {
  state = {
    contextNotes: [],
  };
  //Get details from the app
  getNotextNotes = () => {
    return this.state.contextNotes;
  };
  //Add new note to the app
  addContextNote = (newNote) => {
    const {contextNotes} = this.state;
    contextNotes.concat(newNote);
    this.setState(contextNotes);
  };

  // makes changes to the note

  updateContextNote = (note, id) => {
    const {contextNotes} = this.state;
    const noteIndex = contextNotes.findIndex((item) => (item.id = id));
    contextNotes[noteIndex].title = note.title;
    contextNotes[noteIndex].content = note.content;

    this.setState({contextNotes});
  };

  //Deletes the note
  deleteNote = (id) => {
    const {contextNotes: oldNotes} = this.state;
    const contextNote = oldNotes.filter((note) => note.id === id);
    this.setState({contextNote});
  };

  state = {
    addContextNote: this.addContextNote,
    getNotextNotes: this.getNotextNotes,
    updateContextNote: this.updateContextNote,
    deleteNote: this.deleteNote,
    contextNote: [],
  };
  render() {
    this.state;
    return (
      <NoteContent.Provider value={this.state}>
        {this.props.children}
      </NoteContent.Provider>
    );
  }
}
