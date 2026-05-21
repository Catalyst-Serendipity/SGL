import reviewData from "../content/review.json";

export interface Review {
  name: string;
  avatar?: string;
  rating: number;
  comment?: string;
  date?: string;
}

const positiveKeywords = [
  "enak",
  "mantap",
  "gurih",
  "langganan",
  "rekomen",
  "terbaik",
  "lezat",
  "ramah",
  "nikmat",
  "puas",
];

export const calculateReviewScore = (
  review: Review,
): number => {

  const comment = review.comment?.trim() || "";

  let score = 0;

  score += comment.length * 1.5;

  if (comment.length > 0) {
    score += 100;
  }

  const normalizedComment =
    comment.toLowerCase();

  positiveKeywords.forEach((keyword) => {

    if (normalizedComment.includes(keyword)) {
      score += 25;
    }

  });

  score += review.rating * 10;

  return score;

};

export const sortedReviews: Review[] =
  [...reviewData].sort(
    (a, b) =>
      calculateReviewScore(b) -
      calculateReviewScore(a),
  );

export const REVIEWS_PER_PAGE = 5;

export const featuredReviews =
  sortedReviews.slice(
    0,
    REVIEWS_PER_PAGE,
  );