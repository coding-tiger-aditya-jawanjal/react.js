import { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await fetch(`http://localhost:5000/api/task`);
    const data = await res.json();
    setTasks(data.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <main className="main">
      <div className="box">
        <h1>Task Manager</h1>

        <div className="input-box">
          <input type="text" placeholder="Write a Task..." />
          <button>Add Task</button>
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
                    <FiEdit size={28} className="edit" />
                    <MdDelete size={32} className="delete" />
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
