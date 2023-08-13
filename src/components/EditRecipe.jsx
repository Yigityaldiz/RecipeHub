import { useState } from "react";

export const EditRecipes = ({
  setIsOpen,
  editRecipes,
  storedItems,
  setStoredItems,
  setEditRecipes,
}) => {
  const [newRecipe, setNewRecipe] = useState("");
  const [newName, setNewName] = useState("");
  const [newURL, setNewUrl] = useState("");

  const handleDelete = () => {
    storedItems.map((elem, i) => {
      if (editRecipes.id === elem.id) {
        storedItems.splice(i, 1);
      }

      setStoredItems(storedItems);
      localStorage.setItem("recipes", JSON.stringify(storedItems));
    });

    setIsOpen(false);
  };

  const edit = () => {
    const updatedRecipes = storedItems.map((value) => {
      if (value.id === editRecipes.id) {
        return {
          ...value,
          recipe: newRecipe.trim() === "" ? editRecipes.recipe : newRecipe,
          name: newName.trim() === "" ? editRecipes.name : newName,
          url: newURL.trim() === "" ? editRecipes.url : newURL,
        };
      }
      return value;
    });

    setStoredItems(updatedRecipes);
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
    console.log("edit ", editRecipes.url);
    setIsOpen(false);
  };

  return (
    <div className="py-4  px-4 text-left space-y-5   ">
      <div>
        <label htmlFor="name">Name:</label>
        <input
          className="w-[100%] border-2 border-black  rounded-xl  "
          type="text"
          defaultValue={editRecipes.name}
          onChange={(e) => {
            setNewName(e.target.value);
          }}
        />
      </div>

      <div>
        <label htmlFor="url">
          URL:
          <input
            className="w-[100%] border-2 border-black  rounded-xl "
            type="url"
            defaultValue={editRecipes.url}
            onChange={(e) => {
              setNewUrl(e.target.value);
            }}
          />
        </label>
      </div>

      <textarea
        className="w-[100%] border-2 border-black  rounded-xl "
        onChange={(e) => {
          setNewRecipe(e.target.value);
        }}
        type="text"
        defaultValue={editRecipes.recipe}
      />

      <button
        onClick={edit}
        className="float-right shadow-lg shadow-blue-500/50 text-white bg-blue-600 hover:bg-blue-700 focus:outline-none font-medium text-sm rounded-lg px-6 py-2   "
      >
        Save
      </button>

      <button
        onClick={handleDelete}
        className="float-right shadow-lg shadow-blue-500/50 text-white bg-red-600 hover:bg-red-700 focus:outline-none font-medium text-sm rounded-lg px-6 py-2 mr-2  "
      >
        Delete
      </button>
    </div>
  );
};
