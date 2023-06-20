import * as React from "react";
import { Note } from "../models/note.model";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";

interface INotesProps {
  note: Note;
}

const Notes: React.FC<INotesProps> = ({ note }) => {
  return (
    <div className="mb-3">
      <Card>
        <Card.Body>
          <Card.Title>{note.title}</Card.Title>
          <Card.Text>{note.text}</Card.Text>
          <Card.Subtitle className="text-muted">{note.date}</Card.Subtitle>
          <Button className="mt-3" variant="danger">
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Notes;
