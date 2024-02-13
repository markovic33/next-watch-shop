import Link from "next/link";

interface PaginationBarProps {
  currentPage: number;
  totalPages: number;
}

export default function PaginationBar({
  currentPage,
  totalPages,
}: PaginationBarProps) {
  const maxPage = Math.min(totalPages, Math.max(currentPage + 4, 10));

  const minPage = Math.max(1, Math.min(currentPage - 5, maxPage - 9));

  const numberedPageItems: JSX.Element[] = [];

  for (let page = minPage; page <= maxPage; page++) {
    numberedPageItems.push(
      <Link
        href={"?page=" + page}
        key={page}
        className={`px-4 py-2 mx-1 text-white bg-gray-900 rounded-md mb-2 md:mb-0 ${
          currentPage === page
            ? "bg-black pointer-events-none"
            : "hover:bg-gray-400"
        }`}
      >
        {page}
      </Link>
    );
  }

  return (
    <div className="flex flex-wrap justify-center items-center my-10">
      {numberedPageItems}
    </div>
  );
}
