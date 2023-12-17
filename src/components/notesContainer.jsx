import React from "react";
import NotesInput from "./notesInput"
import NotesContainerList from "./notesContainerList"

export default function NotesContainer({notes, onArchive, onDelete, onAddNotes}){
    return (
        <div className="container_notes">
            <NotesInput onAddNotes={onAddNotes} notes={notes}/>
            <NotesContainerList onArchive={onArchive} onDelete={onDelete} notes={notes}/>
        </div>
    )
}