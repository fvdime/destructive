"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Pagination = ({ count }: any) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const page = searchParams.get("page") || "1";

  const params = new URLSearchParams(searchParams);
  const ITEM_PER_PAGE = 5;

  const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count;

  const handleChangePage = (type: string) => {
    const currentPage = parseInt(page);
    const newPage = type === "prev" ? currentPage - 1 : currentPage + 1;
    params.set("page", newPage.toString());
    replace(`${pathname}?${params}`);
  };

  return (
    <div className="p-2 flex justify-between">
      <button
        className="p-2 cursor-pointer disabled:cursor-not-allowed"
        disabled={!hasPrev}
        onClick={() => handleChangePage("prev")}
      >
        Previous
      </button>
      <button
        className="p-2 cursor-pointer disabled:cursor-not-allowed"
        disabled={!hasNext}
        onClick={() => handleChangePage("next")}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
