import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [isExpended, setExpended] = useState(false);
  const [inputText, setInputText] = useState({ title: "", content: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setInputText((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  function expended() {
    setExpended(true);
  }

  return (
    <div>
      <form
        className="create-note"
        onSubmit={(event) => {
          event.preventDefault();
          props.onClicked(inputText);
          setInputText({ title: "", content: "" });
        }}
      >
        {isExpended && (
          <input
            onChange={handleChange}
            value={inputText.title}
            name="title"
            placeholder="Title"
          />
        )}

        <textarea
          onClick={expended}
          onChange={handleChange}
          value={inputText.content}
          name="content"
          placeholder="Take a note..."
          rows={isExpended ? 3 : 1}
        />
        <Zoom in={isExpended}>
          <Fab type="submit">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
