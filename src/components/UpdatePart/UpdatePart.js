import React from "react";
import supabase from "../../supabase";
import { useState } from "react";
const UpdatePart = ({ id }) => {
  const [text, setText] = useState("");
  async function handleSubmit(e) {
    const { data, error } = await supabase
      .from("todos")
      .update({ content: text })
      .match({ id: id });
    setText("");
  }
  return (
    <div>
      <div className="">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="mx-4"
        />
        <button
          type="submit"
          className="bg-orange-600 h-9 w-20 rounded-md text-white text-sm font-semibold hover:bg-orange-300 "
          onClick={handleSubmit}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default UpdatePart;
