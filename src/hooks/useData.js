import React from "react";
import { useEffect, useState } from "react";
import supabase from "../supabase";

const useData = () => {
  const [tasks, setTasks] = useState([]);
  async function fetchData() {
    let { data: tasks, error } = await supabase.from("todos").select("*");
    setTasks(tasks);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return [tasks, setTasks];
};

export default useData;
