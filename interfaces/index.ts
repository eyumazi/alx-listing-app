export interface CardProps {
  title: string;
  location: string;
  price: string;
  rating: number;
  reviews: string[];
  imageUrl: string;
  iconsUrl: string[];
}

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}
