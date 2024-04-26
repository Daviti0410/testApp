import { ITask } from "../../../types/task";

interface TasksProps {
  task: ITask;
}

const Tasks: React.FC<TasksProps> = ({ task }) => {
  return (
    <tr key={task.id}>
      <td>{task.task}</td>
      <td>blue</td>
    </tr>
  );
};

export default Tasks;
