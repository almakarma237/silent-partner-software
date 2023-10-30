import { DOTS, usePagination } from '@/features/pagination/use-pagination';
import Link from 'next/link';
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md';

export interface IPagination {
  onPageChange: (a: number) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  customClassNames?: string;
  size?: 'small' | 'normal' | 'large';
}

const Pagination: React.FC<IPagination> = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  size = 'normal',
  customClassNames,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (paginationRange === undefined) return null;

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul className='list-style-none flex'>
      {/* Left navigation arrow */}
      {currentPage !== 1 && (
        <li onClick={onPrevious}>
          <Link className={[classes.base, classes.size[size], customClassNames].join(' ')} href='#!'>
            <MdKeyboardDoubleArrowLeft />
          </Link>
        </li>
      )}

      {paginationRange.map((pageNumber, i) => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return (
            <li className='pagination-item dots' key={i}>
              &#8230;
            </li>
          );
        }

        // Render our Page Pills
        return (
          <li onClick={() => onPageChange(Number(pageNumber))} key={i}>
            <Link
              className={[
                classes.base,
                classes.size[size],
                pageNumber === currentPage ? 'bg-blue-100 font-medium text-blue-700' : 'bg-transparent',
                customClassNames,
              ].join(' ')}
              href='#!'
            >
              {pageNumber}
            </Link>
          </li>
        );
      })}
      {/*  Right Navigation arrow */}
      {currentPage !== lastPage && (
        <li onClick={onNext}>
          <Link className={[classes.base, classes.size[size], customClassNames].join(' ')} href='#!'>
            <MdKeyboardDoubleArrowRight />
          </Link>
        </li>
      )}
    </ul>
  );
};

const classes = {
  base: 'relative block rounded-full bg-transparent text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white',
  size: {
    small: 'px-2 py-1 text-sm',
    normal: 'px-4 py-2',
    large: 'px-8 py-3 text-lg',
  },
  variant: {
    primary: 'bg-blue-500 hover:bg-blue-800 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white',
    secondary:
      'bg-gray-200 hover:bg-gray-800 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 text-gray-900 hover:text-white',
    danger: 'bg-red-500 hover:bg-red-800 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white',
  },
};

export { Pagination };
