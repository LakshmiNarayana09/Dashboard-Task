import React, { useState } from "react";
import type { TaskComment, TaskActivityEntry } from "../../types/tasks";
import { TaskCommentComposer } from "./TaskCommentComposer";

interface TaskCommentsPanelProps {
  comments: TaskComment[];
  activity: TaskActivityEntry[];
  onAddComment: (text: string) => void;
}

type Tab = "comments" | "activity";

export const TaskCommentsPanel: React.FC<TaskCommentsPanelProps> = ({
  comments,
  activity,
  onAddComment,
}) => {
  const [tab, setTab] = useState<Tab>("comments");

  return (
    <div>
      <div className="mb-3 flex items-center gap-5 border-b border-gray-100">
        <button
          type="button"
          onClick={() => setTab("comments")}
          className={`relative pb-2 text-xs font-semibold uppercase tracking-wide ${
            tab === "comments" ? "text-emerald-600" : "text-gray-400 hover:text-gray-600"
          }`}
        >
          Comments ({comments.length})
          {tab === "comments" && (
            <span className="absolute -bottom-px left-0 h-0.5 w-full rounded-full bg-emerald-500" />
          )}
        </button>
        <button
          type="button"
          onClick={() => setTab("activity")}
          className={`relative pb-2 text-xs font-semibold uppercase tracking-wide ${
            tab === "activity" ? "text-emerald-600" : "text-gray-400 hover:text-gray-600"
          }`}
        >
          Activity
          {tab === "activity" && (
            <span className="absolute -bottom-px left-0 h-0.5 w-full rounded-full bg-emerald-500" />
          )}
        </button>
      </div>

      {tab === "comments" ? (
        <div className="space-y-3">
          {comments.map((comment) => (
            <div key={comment.id} className="flex items-start gap-2.5">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold text-emerald-700">
                {comment.author.name.charAt(0)}
              </span>
              <div className="min-w-0 flex-1 rounded-xl bg-gray-50 px-3 py-2">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-xs font-semibold text-gray-800">{comment.author.name}</p>
                  <span className="shrink-0 text-[10px] text-gray-400">{comment.timestamp}</span>
                </div>
                <p className="mt-0.5 text-sm text-gray-600">{comment.text}</p>
              </div>
            </div>
          ))}
          {comments.length === 0 && (
            <p className="py-4 text-center text-xs text-gray-400">No comments yet</p>
          )}
          <TaskCommentComposer onSubmit={onAddComment} />
        </div>
      ) : (
        <div className="space-y-3">
          {activity.map((entry) => (
            <div key={entry.id} className="flex items-start gap-2.5 text-sm">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gray-100 text-xs font-semibold text-gray-600">
                {entry.author.name.charAt(0)}
              </span>
              <p className="text-gray-600">
                <span className="font-medium text-gray-800">{entry.author.name}</span> {entry.action}
                <span className="ml-1.5 text-xs text-gray-400">{entry.timestamp}</span>
              </p>
            </div>
          ))}
          {activity.length === 0 && (
            <p className="py-4 text-center text-xs text-gray-400">No activity yet</p>
          )}
        </div>
      )}
    </div>
  );
};

export default TaskCommentsPanel;