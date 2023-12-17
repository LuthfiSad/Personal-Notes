import React from "react";
import { showFormattedDate } from "../utils/index";
import Button from "./button";

export default function NotesItem({ id, title, body, archived, createdAt, onArchive, onDelete}) {
  if (archived) {
    return (
      <div className="notes-item">
        <div className="card-main">
          <h3 className="notes-title">{title}</h3>
          <p className="notes-date">{showFormattedDate(createdAt)}</p>
          <p className="notes-body">{body}</p>
        </div>
        <div className="notes-button">
            <Button style="unarchive-button" onclick={()=>onArchive(id, archived)}>Unarchive</Button>
            <Button style="delete-button" onclick={()=>onDelete(id, title)}>Delete</Button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="notes-item">
        <div className="card-main">
          <h3 className="notes-title">{title}</h3>
          <p className="notes-date">{showFormattedDate(createdAt)}</p>
          <p className="notes-body">{body}</p>
        </div>
        <div className="notes-button">
        <Button style="archive-button" onclick={()=>onArchive(id, archived)}>Archive</Button>
        <Button style="delete-button" onclick={()=>onDelete(id, title)}>Delete</Button>
        </div>
      </div>
    );
  }
}
