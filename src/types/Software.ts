export interface Software {
  id: number;
  title: string;
  description: string;
  rating: number;
  reason: string;
  image: string;
  detailImages: string[];
  features: string[];
  ratingMatrix: {
    category: string;
    score: number;
    explanation: string;
  }[];
  longDescription: string;
}