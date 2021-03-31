export type Note ={title: string, count:number}

export type PerfumeSource = {
  base_main: Note;
  base_sub: Note[];
  brand: string;
  density: string;
  gender: string;
  img_url: string;
  launching_month: string;
  launching_year: string;
  main_scent: string[];
  middle_main: Note;
  middle_sub: Note[];
  reviews: string[];
  sub_scent: string[];
  title: string;
  top_main: Note;
  top_sub: Note[];
};

export type Perfume = {
  _id: string;
  _index: string;
  _score: number;
  _source: PerfumeSource;
  _type: string;
};

export type SearchedPerfume = {
  hits: {
    max_score: number;
    hits: Perfume[];
  };
  total: {
    relation: string;
    value: number;
  };
  timed_out: boolean;
  took: number;
  _shards: {
    total: number;
    successful: number;
    skipped: number;
    failed: number;
  };
};

export type PerfumeDocument = {
  _id: string;
  ids: string[];
  selects: string[];
  email: string;
  maxScore: number;
  search: string;
  sources: string;
};

export type PerfumeCelebrityDocument = {
  _id: string;
  ids: string[];
  select: string;
  maxScore: number;
  search: string;
  sources: string;
};

export type Perfumes = {
  results: PerfumeDocument;
  total: number;
};

export type PerfumesWithCelebrity = {
  results: PerfumeCelebrityDocument;
  total: number;
};
