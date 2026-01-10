import axios from "axios";
import { useState } from "react";

function Add() {
  const [tittle, setTittle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    // e.preventDefault();

    try {
      await axios.post(process.env.REACT_APP_POST, {
        tittle: tittle,
        description: description,
      });

      // reset form
      setTittle("");
      setDescription("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="box mb-6">
      <form onSubmit={handleSubmit}>

        <div className="field">
          <label className="label">Title</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Todo title"
              value={tittle}
              onChange={(e) => setTittle(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Description</label>
          <div className="control">
            <textarea
              className="textarea"
              placeholder="Todo description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="field is-grouped is-justify-content-end">
          <button className="button is-primary" type="submit">
            Add Todo
          </button>
        </div>

      </form>
    </div>
  );
}

export default Add;
