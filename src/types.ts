export interface StageCardProps {
  stage: string;
  title: string;
  description: string;
  image: string;
  delay?: number;
}

export interface Stage {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  detailImage?: string;
  schedule: string;
  duration: string;
  focusArea: string;
  curriculum: {
    title: string;
    topics: string[];
  }[];
  benefits: string;
  outcomes: string[];
}