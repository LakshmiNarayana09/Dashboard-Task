import React, { useMemo, useState } from "react";
import { TaskBoardHeader } from "./TaskBoardHeader";
import { TaskColumn } from "./TaskColumn";
import { TaskFilterPanel } from "./TaskFilterPanel";
import { TaskDetailsModal } from "./TaskDetailsModal";
import {
  TASK_COLUMNS as INITIAL_COLUMNS,
  mockTaskCards,
  TASK_PROJECTS,
  TASK_LABEL_OPTIONS,
  TASK_MEMBER_OPTIONS,
  TASK_ATTACHMENTS_BY_TASK,
  TASK_COMMENTS_BY_TASK,
  TASK_ACTIVITY_BY_TASK,
} from "../../data/mockTasksData";
import type {
  TaskCardData,
  TaskColumnKey,
  TaskColumnMeta,
  TaskProject,
  TaskFilters,
} from "../../types/tasks";
import type { AddMenuAction } from "./AddMenu";

const DEFAULT_FILTERS: TaskFilters = {
  search: "",
  labelIds: [],
  memberIds: [],
  dueDate: "anytime",
  status: "all",
};

export const TaskBoard: React.FC = () => {
  const [tasks, setTasks] = useState<TaskCardData[]>(mockTaskCards);
  const [columns, setColumns] =
    useState<TaskColumnMeta[]>(INITIAL_COLUMNS);
  const [activeProject, setActiveProject] = useState<TaskProject>(
    TASK_PROJECTS[0]
  );
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState<TaskFilters>(DEFAULT_FILTERS);
  const [selectedTask, setSelectedTask] =
    useState<TaskCardData | null>(null);
  const [commentsByTask, setCommentsByTask] =
    useState(TASK_COMMENTS_BY_TASK);

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const query = filters.search.toLowerCase();

      const matchesSearch =
        !query ||
        task.title.toLowerCase().includes(query) ||
        (task.description?.toLowerCase().includes(query) ?? false);

      const matchesLabels =
        filters.labelIds.length === 0 ||
        (task.labelIds ?? []).some((id) =>
          filters.labelIds.includes(id)
        );

      const matchesMembers =
        filters.memberIds.length === 0 ||
        task.assignees.some((a) =>
          filters.memberIds.includes(a.id)
        );

      const matchesStatus =
        filters.status === "all" ||
        (filters.status === "completed"
          ? task.column === "completed"
          : task.column !== "completed");

      const matchesDue = true;

      return (
        matchesSearch &&
        matchesLabels &&
        matchesMembers &&
        matchesStatus &&
        matchesDue
      );
    });
  }, [tasks, filters]);

  const tasksByColumn = (key: TaskColumnKey) =>
    filteredTasks.filter((task) => task.column === key);

  const handleSubtaskToggle = (
    taskId: string,
    subtaskId: string
  ) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId
          ? {
              ...task,
              subtasks: task.subtasks?.map((subtask) =>
                subtask.id === subtaskId
                  ? {
                      ...subtask,
                      done: !subtask.done,
                    }
                  : subtask
              ),
            }
          : task
      )
    );

    
    setSelectedTask((prev) =>
      prev && prev.id === taskId
        ? {
            ...prev,
            subtasks: prev.subtasks?.map((subtask) =>
              subtask.id === subtaskId
                ? {
                    ...subtask,
                    done: !subtask.done,
                  }
                : subtask
            ),
          }
        : prev
    );
  };

  const handleAddTask = (columnKey: TaskColumnKey) => {
    console.log("Add task to", columnKey);
  };

  const handleCardClick = (task: TaskCardData) => {
    setSelectedTask(task);
  };

  const handleCardMenuClick = (task: TaskCardData) => {
    console.log("Open options for", task.id);
  };

  const handleAddAction = (action: AddMenuAction) => {
    console.log("Add menu action:", action);
  };

  const handleColumnColorChange = (
    columnKey: TaskColumnKey,
    colorClass: string
  ) => {
    setColumns((prev) =>
      prev.map((column) =>
        column.key === columnKey
          ? {
              ...column,
              accentClass: colorClass,
            }
          : column
      )
    );
  };

  const handleCompleteAllTasks = (
    columnKey: TaskColumnKey
  ) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.column === columnKey
          ? {
              ...task,
              subtasks: task.subtasks?.map((subtask) => ({
                ...subtask,
                done: true,
              })),
            }
          : task
      )
    );
  };

  const handleArchiveAllTasks = (
    columnKey: TaskColumnKey
  ) => {
    console.log("Archive all tasks in", columnKey);
  };

  const handleDeleteAllTasks = (
    columnKey: TaskColumnKey
  ) => {
    setTasks((prev) =>
      prev.filter((task) => task.column !== columnKey)
    );

    
    setSelectedTask((prev) =>
      prev && prev.column === columnKey ? null : prev
    );
  };

  const handleToggleComplete = (task: TaskCardData) => {
    const newColumn: TaskColumnKey =
      task.column === "completed"
        ? "todo"
        : "completed";

    setTasks((prev) =>
      prev.map((currentTask) =>
        currentTask.id === task.id
          ? {
              ...currentTask,
              column: newColumn,
            }
          : currentTask
      )
    );

    setSelectedTask((prev) =>
      prev && prev.id === task.id
        ? {
            ...prev,
            column: newColumn,
          }
        : prev
    );
  };

  const handleAddComment = (
    taskId: string,
    text: string
  ) => {
    setCommentsByTask((prev) => ({
      ...prev,
      [taskId]: [
        ...(prev[taskId] ?? []),
        {
          id: `${Date.now()}`,
          author: {
            id: "me",
            name: "You",
          },
          text,
          timestamp: "Just now",
        },
      ],
    }));
  };

  return (
    <div className="min-h-full w-full bg-gray-50 p-6">
      <TaskBoardHeader
        boardName={activeProject.name}
        onBoardChange={setActiveProject}
        onAddAction={handleAddAction}
        onFilterClick={() =>
          setIsFilterOpen((value) => !value)
        }
      />

      <div className="flex w-full gap-5 overflow-x-auto pb-2">
        {columns.map((column) => (
          <TaskColumn
            key={column.key}
            column={column}
            tasks={tasksByColumn(column.key)}
            onAddTask={handleAddTask}
            onCardClick={handleCardClick}
            onCardMenuClick={handleCardMenuClick}
            onSubtaskToggle={handleSubtaskToggle}
            onColumnColorChange={handleColumnColorChange}
            onCompleteAllTasks={handleCompleteAllTasks}
            onArchiveAllTasks={handleArchiveAllTasks}
            onDeleteAllTasks={handleDeleteAllTasks}
          />
        ))}
      </div>

      <TaskFilterPanel
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        filters={filters}
        onApply={(next) => {
          setFilters(next);
          setIsFilterOpen(false);
        }}
        labelOptions={TASK_LABEL_OPTIONS}
        memberOptions={TASK_MEMBER_OPTIONS}
      />

      <TaskDetailsModal
        task={selectedTask}
        labelOptions={TASK_LABEL_OPTIONS}
        attachments={
          selectedTask
            ? TASK_ATTACHMENTS_BY_TASK[selectedTask.id] ?? []
            : []
        }
        comments={
          selectedTask
            ? commentsByTask[selectedTask.id] ?? []
            : []
        }
        activity={
          selectedTask
            ? TASK_ACTIVITY_BY_TASK[selectedTask.id] ?? []
            : []
        }
        onClose={() => setSelectedTask(null)}
        onToggleComplete={handleToggleComplete}
        onSubtaskToggle={handleSubtaskToggle}
        onAddComment={handleAddComment}
      />
    </div>
  );
};

export default TaskBoard;