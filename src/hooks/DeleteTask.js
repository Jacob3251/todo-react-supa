import React, { useState } from "react";
import { TrashIcon } from "@heroicons/react/solid";
import { PencilIcon } from "@heroicons/react/solid";
import supabase from "../supabase";
import UpdatePart from "../components/UpdatePart/UpdatePart";
const DeleteTask = (props) => {
  const id = props.id;
  const [loading, setLoading] = useState(false);

  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    //  toggle shown state
    setIsShown((current) => !current);

    //  or simply set it to true
    // setIsShown(true);
  };

  async function handleupdate() {
    handledelete();
  }
  async function handledelete() {
    const { data, error } = await supabase.from("todos").delete().eq("id", id);
    setLoading(false);
  }
  // function uptrig() {
  //   <UpdatePart id={id}></UpdatePart>;
  //   setTrig(0);
  // }
  return (
    <div>
      <div className="flex justify-evenly my-4">
        <TrashIcon className="h-8 w-8 text-red-600" onClick={handledelete} />
        <PencilIcon className="h-8 w-8 text-white " onClick={handleClick} />
      </div>
      <div>{isShown && <UpdatePart id={id}></UpdatePart>}</div>
    </div>
  );
};

export default DeleteTask;
