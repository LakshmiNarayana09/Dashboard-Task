import React from "react";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

interface PaginationProps {
  page: number;
  pageCount: number;
  pageSize: number;
  totalItems: number;
  onPageChange: (page: number) => void;
  onPageSizeChange?: (size: number) => void;
  pageSizeOptions?: number[];
}

export const Pagination: React.FC<PaginationProps> = ({
  page,
  pageCount,
  pageSize,
  totalItems,
  onPageChange,
  onPageSizeChange,
  pageSizeOptions = [10, 25, 50],
}) => {
  const from = (page - 1) * pageSize + 1;
  const to = Math.min(page * pageSize, totalItems);
  const pages = buildPageList(page, pageCount);

  return (
    <div className="flex items-center justify-between px-1 pt-4">
      <div className="flex items-center gap-2 text-sm text-gray-500">
        {onPageSizeChange ? (
          <select
            value={pageSize}
            onChange={(e) => onPageSizeChange(Number(e.target.value))}
            className="rounded-lg border border-gray-200 bg-white px-2 py-1.5 text-sm text-gray-600 focus:outline-none"
          >
            {pageSizeOptions.map((size) => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        ) : (
          <span className="rounded-lg border border-gray-200 px-2 py-1.5">{pageSize}</span>
        )}
        <span>Showing {from} - {to} of {totalItems}</span>
      </div>

      <div className="flex items-center gap-1">
        <PageButton onClick={() => onPageChange(1)} disabled={page === 1} aria-label="First page">
          <ChevronsLeft className="h-4 w-4" />
        </PageButton>
        <PageButton onClick={() => onPageChange(Math.max(1, page - 1))} disabled={page === 1} aria-label="Previous page">
          <ChevronLeft className="h-4 w-4" />
        </PageButton>

        {pages.map((p, idx) =>
          p === "..." ? (
            <span key={`ellipsis-${idx}`} className="px-2 text-sm text-gray-400">…</span>
          ) : (
            <button
              key={p}
              type="button"
              onClick={() => onPageChange(p as number)}
              className={`h-8 min-w-[2rem] rounded-lg px-2 text-sm font-medium ${
                p === page ? "bg-emerald-500 text-white" : "text-gray-500 hover:bg-gray-50"
              }`}
            >
              {p}
            </button>
          )
        )}

        <PageButton onClick={() => onPageChange(Math.min(pageCount, page + 1))} disabled={page === pageCount} aria-label="Next page">
          <ChevronRight className="h-4 w-4" />
        </PageButton>
        <PageButton onClick={() => onPageChange(pageCount)} disabled={page === pageCount} aria-label="Last page">
          <ChevronsRight className="h-4 w-4" />
        </PageButton>
      </div>
    </div>
  );
};

const PageButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode }> = ({
  children,
  className = "",
  ...props
}) => (
  <button
    type="button"
    className={`flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40 ${className}`}
    {...props}
  >
    {children}
  </button>
);

function buildPageList(page: number, pageCount: number): (number | "...")[] {
  if (pageCount <= 7) {
    return Array.from({ length: pageCount }, (_, i) => i + 1);
  }
  const pages: (number | "...")[] = [1, 2, 3];
  if (page > 4) pages.push("...");
  pages.push(pageCount - 1 > 3 ? Math.min(Math.max(page, 4), pageCount - 2) : 4);
  pages.push("...", pageCount);
  return Array.from(new Set(pages.filter((p) => p === "..." || (p >= 1 && p <= pageCount))));
}

export default Pagination;