export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  type: 'residential' | 'commercial' | 'industrial';
}

export interface Project {
  id: string;
  title: string;
  location: string;
  imageUrl: string;
  stats: {
    energySaved: string;
    co2Reduced: string;
  };
}

export interface ROIResult {
  year: number;
  cumulativeSavings: number;
  gridCost: number;
}
