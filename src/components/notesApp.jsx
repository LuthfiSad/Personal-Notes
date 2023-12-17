import React from "react";
import Header from "./Header";
import NotesContainer from "./notesContainer";
import Footer from "./footer";
import { getInitialData } from "../utils/index";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      notesBackup: getInitialData(),
    };

    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
  }
  onSearchHandler(e) {
    const keyword = e.target.value;
    if (keyword.length > 0) {
      this.setState({
        notes: this.state.notesBackup.filter(
          (note) =>
            note.title.toLowerCase().includes(keyword.toLowerCase())
            // || note.body.toLowerCase().includes(keyword.toLowerCase())
        ),
      });
    } else {
      this.setState({
        notes: this.state.notesBackup,
      });
    }
  }

  onArchiveHandler(id, archived) {
    let text = archived ? "Membatalkan Pengarsipan" : "Memindahkan ke Arsip";
    let konfirmasi = confirm(`Apakah anda ingin ${text}`);
    if (konfirmasi) {
      this.setState((prev) => {
        return {
          notes: prev.notes.map((note) => {
            if (note.id === id) {
              return {
                ...note,
                archived: !note.archived,
              };
            } else {
              return note;
            }
          }),

          notesBackup: prev.notesBackup.map((note) => {
            if (note.id === id) {
              return {
                ...note,
                archived: !note.archived,
              };
            } else {
              return note;
            }
          }),
        };
      });
    }
  }

  onDeleteHandler(id, title) {
    let konfirmasi = confirm(`Apakah anda ingin menghapus catatan ${title}`);
    if (konfirmasi) {
      this.setState((prev) => {
        return {
          notes: prev.notes.filter((note) => note.id !== id),
          notesBackup: prev.notesBackup.filter(
            (note) => note.id !== id
          ),
          showModal: false,
        };
      });
    }
  }

  onAddNotesHandler({ title, body }) {
    this.setState((prev) => {
        return {
            notes: [
                ...prev.notes,
                {
                    id: +new Date(),
                    title,
                    createdAt: +new Date(),
                    body,
                    archived: false,
                },
            ],

            notesBackup: [
                ...prev.notesBackup,
                {
                    id: +new Date(),
                    title,
                    createdAt: +new Date(),
                    body,
                    archived: false,
                },
            ],
        };
    });
    alert("Data baru berhasil di tambah")
}

  render() {
    return (
      <React.Fragment>
        <Header onSearch={this.onSearchHandler} />
        <NotesContainer
            onAddNotes={this.onAddNotesHandler}
          notes={this.state.notes}
          onArchive={this.onArchiveHandler}
          onDelete={this.onDeleteHandler}
        />
        <Footer />
      </React.Fragment>
    );
  }
}

export default NotesApp;
