export interface Product {
  id: string;
  name: string;
  category: 'panels' | 'inverters' | 'batteries';
  description: string;
  specs: Record<string, string>;
  image: string;
  link: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  location: string;
  capacity: string;
  output: string;
  image: string;
  category: string;
}

export interface Certification {
  id: string;
  name: string;
  code: string;
  description: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}