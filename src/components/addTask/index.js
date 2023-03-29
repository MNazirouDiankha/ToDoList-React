import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [statut, setStatut] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeDate = (e) => {
    setDate(e.target.value);
  };

  const onChangeStatut = (e) => {
    setStatut(e.currentTarget.checked);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      alert("Please add text");
      return;
    }
    onAdd({ name, date, statut });

    setName("");
    setDate("");
    setStatut(false);
  };
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task name</label>
        <input
          type="text"
          placeholder="Task name"
          value={name}
          onChange={onChangeName}
        />
      </div>

      <div className="form-control">
        <label>Date</label>
        <input
          type="date"
          placeholder="Task name"
          value={date}
          onChange={onChangeDate}
        />
      </div>

      <div className="form-control form-control-check">
        <label>Set Statut</label>
        <input type="checkbox" value={statut} onChange={onChangeStatut} />
      </div>

      <input type="submit" value="Add Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
