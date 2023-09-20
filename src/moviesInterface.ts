interface Thumbnail {
  small: string;
  large: string;
}

interface Movie {
  title: string;
  thumbnail: {
    trending?: Thumbnail;
    regular: {
      small: string;
      medium: string;
      large: string;
    };
  };
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}

export default Movie;
