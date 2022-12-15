import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useInput } from "../hooks/useInput";
import { useLocalization } from "../hooks/useLocalization";
import { addNote } from "../utils/API";
import { FaPlus } from "react-icons/fa";

export const Append = () => {
  const [title, setTitle] = useInput("");
  const [body, setBody] = useState("");

  const navigate = useNavigate();
  const text = useLocalization("input");

  const handleAddNote = async (note) => {
    try {
      const { error } = await addNote(note);

      if (!error) {
        navigate("/");
      }
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  };

  return (
    <div className="mx-10 mt-0">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleAddNote({
            title: title,
            body: body,
          });
        }}
      >
        <div className="my-5">
          <input
            className="w-full text-xl p-3 rounded-xl border-2 border-violet-200 dark:bg-primary-dark dark:text-white"
            type="text"
            name="title"
            placeholder={text.titlePlaceholder}
            value={title}
            onChange={setTitle}
            required
          />
        </div>

        <div>
          <div
            className="w-full h-64 p-3 rounded-xl border-2 border-violet-200 dark:text-white"
            placeholder={text.bodyPlaceholder}
            contentEditable
            onInput={(event) => {
              setBody(event.target.innerText);
            }}
          />
        </div>

        <button className="my-5 p-4 rounded-xl group text-white bg-emerald-600 hover:bg-emerald-800">
          <span className="flex items-center text-white group-hover:text-yellow-400">
            <FaPlus className="mr-2" /> {text.submit}
          </span>
        </button>
      </form>
    </div>
  );
};
