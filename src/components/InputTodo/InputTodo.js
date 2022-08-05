import React, { useState } from "react";
import supabase from "../../supabase";
const InputTodo = () => {
  const [text, setText] = useState("");
  const [textcontent, setTextcontent] = useState("");
  async function handleSubmit(e, f) {
    // e.preventDefault();
    // f.preventDefault();
    // console.log(text);
    const { data, error } = await supabase
      .from("todos")
      .insert([{ text, content: textcontent }]);
    setText("");
    setTextcontent("");
  }
  async function handleClear() {
    const { data, error } = await supabase
      .from("todos")
      .delete()
      .not("text", "eq", "do not delete me");
  }
  return (
    <div>
      <div className="shadow-lg hover:shadow-2xl bg-orange-400 hover:shadow-orange-500 w-72 mx-auto md:w-96 h-60 md:h-50 rounded pt-5 mb-10 lg:mb-10">
        <div className="">
          <h3 className="text-white text-lg font-semibold">Add Title</h3>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="my-4"
          />
          <h3 className="text-white text-lg font-semibold">Add Details</h3>
          <input
            type="text"
            value={textcontent}
            onChange={(f) => setTextcontent(f.target.value)}
            className="my-4"
          />
        </div>
        <div className="flex justify-evenly">
          <button
            type="submit"
            className="bg-orange-600 h-9 w-20 rounded-md text-white text-sm font-semibold hover:bg-orange-300 "
            onClick={handleSubmit}
          >
            Add
          </button>
          <button
            type="submit"
            className="bg-red-600 h-9 w-40 rounded-md text-white text-sm font-semibold hover:bg-red-700 "
            onClick={handleClear}
          >
            Clear All Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputTodo;
