import React from "react";
import NotesList from "./notesList";

export default function NotesContainerList({notes, onArchive, onDelete}){
    return (
        <div className="container-list">
            <div className="notes-card">
                <h2>Daftar Catatan</h2>
                <div className="active-notes">
                    <NotesList onArchive={onArchive} onDelete={onDelete} notes={notes.filter((note) => !note.archived)}/>
                </div>
            </div>
            <div className="notes-card">
                <h2>Arsip Catatan</h2>
                <div className="archived-notes">
                    <NotesList onArchive={onArchive} onDelete={onDelete} notes={notes.filter((note) => note.archived)}/>
                </div>
            </div>
        </div>
    );
}