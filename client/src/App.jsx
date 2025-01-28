import { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState();
  const [change, setChange] = useState(false);

  const [updateId, setUpdateId] = useState(null);

  const fetchTasks = async () => {
    const res = await fetch(`http://localhost:5000/api/task`);
    const data = await res.json();
    setTasks(data.data);
  };

  const handleAddTask = async (e) => {
    e.preventDefault();

    const res = await fetch(`http://localhost:5000/api/task`, {
      method: "POST",
      body: JSON.stringify({
        title: newTask,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    toast.success(data.msg);
    setNewTask();
    setChange((pre) => !pre);
  };

  const handleDeleteTask = async (e, id) => {
    e.preventDefault();

    const res = await fetch(`http://localhost:5000/api/task/${id}`, {
      method: "DELETE",
    });

    const data = await res.json();
    toast.warn(data.msg);
    setChange((pre) => !pre);
  };

  const handleEdit = (e, id, title) => {
    e.preventDefault();

    setUpdateId(id);
    setNewTask(title);
  };

  const handleUpdate = async () => {
    const res = await fetch(`http://localhost:5000/api/task/${updateId}`, {
      method: "PUT",
      body: JSON.stringify({
        newTitle: newTask,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    setChange((pre) => !pre);
    setNewTask("");
    setUpdateId(null);
    toast.success(data.msg);
  };

  useEffect(() => {
    fetchTasks();
  }, [change]);

  return (
    <main className="main">
      <div className="box">
        <h1>Task Manager</h1>

        <div className="input-box">
          <input
            type="text"
            placeholder="Write a Task..."
            onChange={(e) => setNewTask(e.target.value)}
            value={newTask ? newTask : ""}
          />
          <button onClick={updateId ? handleUpdate : handleAddTask}>
            {updateId ? "Update" : "Add Task"}
          </button>
        </div>

        <div className="task-box">
          {tasks.length > 0 ? (
            tasks.map((element, index) => {
              return (
                <div className="single-task" key={element._id}>
                  <p>
                    {index + 1}. {element.title}
                  </p>
                  <div className="icons">
                    <FiEdit
                      size={28}
                      className="edit"
                      onClick={(e) =>
                        handleEdit(e, element?._id, element?.title)
                      }
                    />
                    <MdDelete
                      size={32}
                      className="delete"
                      onClick={(e) => handleDeleteTask(e, element._id)}
                    />
                  </div>
                </div>
              );
            })
          ) : (
            <p>No Task yet</p>
          )}
        </div>
      </div>
    </main>
  );
};

export default App;
