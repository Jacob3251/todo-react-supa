// import React from "react";

// const Notes = (props) => {
//   const { id, created_at, text, content } = props.note;
//   return (
//     <div className="mx-12 my-8">
//       <h1 className="text-left font-bold font-sans text-2xl">{text}</h1>
//       <p className="text-left">{content}</p>
//     </div>
//   );
// };
// export default Notes;
import React from "react";
import DeleteTask from "../../hooks/DeleteTask";

const Notes = (props) => {
  const { id, created_at, text, content } = props.note;
  return (
    <div className="shadow-lg hover:shadow-2xl bg-orange-400 hover:shadow-orange-300 w-72 mx-auto md:w-96 h-80 md:h-80 rounded pt-8 mb-10 lg:mb-10">
      <h2 className="text-3xl text-white text-center">{text}</h2>

      <div className="w-full text-center px-4">
        <p className="text-3xl text-left text-white h-4">"</p>
        <p className="text-xl text-white text-center px-4">{content}</p>
        <p className="text-3xl text-right text-white">"</p>
      </div>
      <div>
        <DeleteTask id={id}></DeleteTask>
      </div>
    </div>
  );
};

export default Notes;
