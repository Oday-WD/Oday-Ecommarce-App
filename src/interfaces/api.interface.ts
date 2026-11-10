export interface ApiResponse<T> {
  results: number;
  metadata: PaginationMetadata;
  data: T[];
}

export interface SingleApiResponse<T> {
  data: T;
}

export interface PaginationMetadata {
  currentPage: number;
  numberOfPages: number;
  limit: number;
  nextPage?: number;
  prevPage?: number;
}
