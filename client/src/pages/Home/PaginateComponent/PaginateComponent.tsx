import { FilterInfo } from "./FilterInfo/FilterInfo";
import { Pagination } from "./Pagination/Pagination";

type FooterProps = {
  isFooter?: boolean;
  total: number;
  onPageFrom: number;
  onPageToMax: number;
  currentPage: number;
};
export const PaginateComponent = ({
  isFooter,
  total,
  onPageFrom,
  onPageToMax,
  currentPage
}: FooterProps) => {
  return (
    <div className="row">
      {isFooter && (
        <FilterInfo
          onPageFrom={onPageFrom}
          onPageToMax={onPageToMax}
          total={total}
        />
      )}
      <Pagination
        total={total}
        onPageToMax={onPageToMax}
        onPageFrom={onPageFrom}
        currentPage={currentPage}
      />
    </div>
  );
};
