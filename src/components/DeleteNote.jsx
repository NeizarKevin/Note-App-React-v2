import React from "react";
import { FaTrash } from "react-icons/fa";
import PropTypes from "prop-types";
import { deleteNote } from "../utils/API";

export const DeleteNote = ({
  id,
  getActiveNotes,
  getArchivedNotes,
  statusName,
}) => {
  const handleDeleteNote = async (id) => {
    try {
      await deleteNote(id);
      if (statusName === "note") {
        getActiveNotes();
      } else {
        getArchivedNotes();
      }
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  };

  return (
    <>
      <div className="absolute px-3 py-2 m-3 top-4 right-2 rounded-md group border-2 text-white border-secondary-dark hover:text-red-600">
        <button
          onClick={(event) => {
            event.stopPropagation();
            handleDeleteNote(id);
          }}
        >
          <FaTrash />
        </button>
      </div>
    </>
  );
};

DeleteNote.propTypes = {
  id: PropTypes.string.isRequired,
  getActiveNotes: PropTypes.func,
  getArchivedNotes: PropTypes.func,
  statusName: PropTypes.string.isRequired,
};
