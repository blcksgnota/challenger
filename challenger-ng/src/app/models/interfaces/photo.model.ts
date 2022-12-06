export interface Photo {
  id: string;
  width: number;
  height: number;
  color: string | null;
  description: string | null;
  alt_description: string | null;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3?: string;
  };
  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
  };
  user: {
    id: string;
    username: string;
    name: string;
    first_name: string;
    last_name: string | null;
    profile_image: {
      large: string;
      medium: string;
      small: string;
    };
    portfolio_url: string | null;
    location: string | null;
    bio: string | null;
  };
  likes: number;
  views?: number;
}
