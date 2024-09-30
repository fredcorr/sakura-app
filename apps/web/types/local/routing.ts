export interface RouteParams {
  params: {
    slug: string[];
  };
  searchParams?: {
    [key: string]: string;
  };
}
