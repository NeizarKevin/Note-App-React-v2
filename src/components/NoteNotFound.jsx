import React from "react";
import PropTypes from "prop-types";
import { useLocalization } from "../hooks/useLocalization";
import { TbNoteOff } from "react-icons/tb";

export const NoteNotFound = ({ className }) => {
  const text = useLocalization("noteNotFound");

  return (
    <div className={className}>
      <div className="flex flex-col items-center">
        <span className="text-6xl mb-2 dark:text-white">
          <TbNoteOff />
        </span>
        <h2 className="text-3xl font-bold dark:text-white">{text.message}</h2>
      </div>
    </div>
  );
};

NoteNotFound.propTypes = {
  className: PropTypes.string,
};
