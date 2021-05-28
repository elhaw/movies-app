declare namespace IMovie {
  export interface IProps {
    adult?: boolean;
    backdrop_path?: string;
    id: string;
    original_language?: string;
    original_title?: string;
    overview?: string;
    popularity?: number;
    poster_path?: string;
    release_date?: string;
    title: string;
    video?: boolean;
    vote_average?: numb;
    vote_count?: number;
    poster?: string;
  }
}

export { IMovie };
