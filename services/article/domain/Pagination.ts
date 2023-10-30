

namespace Pagination {
      type Pagination = Readonly<{
        totalPages :number;
        pageSize: number;
        totalElements: number;
        current: number;
        first: boolean;
        last: boolean;
      }>;

    export type Type = Pagination;
  }

  export type { Pagination };

