import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskItem = () => {
    const { toggleTaskCompletion, deleteTask, moveTaskUp, moveTaskDown } = useContext(TaskContext);

    return (
        <div>
            <h3 style={{ textDecoration: task.isCompleted ? 'line-through' : 'none'}}>
                {task.title}
            </h3>
            <button onClick={() => toggleTaskCompletion(task.id)}>Mark as {task.isCompleted ? 'Undone' : 'Done'}</button>
            <button onClick={() => moveTaskUp(index)}>Move Up</button>
            <button onClick={() => moveTaskDown(index)}>Move Down</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
    );
};

export default TaskItem;