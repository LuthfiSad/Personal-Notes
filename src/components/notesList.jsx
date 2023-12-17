import React from "react";
import NotesItem from "./notesItem";

export default function NotesList({notes, onArchive, onDelete}){
        if (notes.length === 0) {
            return (
                <p className="notes-empty text-danger">
                   Tidak Ada Catatan
                </p>
            );
        } else {
            return (
                <div className="notes-list">
                    {notes.map((note) => (
                        <NotesItem
                        onDelete={onDelete}
                        onArchive={onArchive}
                            key={note.id}
                            {...note}
                        />
                    ))}
                </div>
            );
        }
}