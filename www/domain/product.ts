export interface Product {
  icon: React.ReactNode;
  title: string;
  image: string;
  description: string;
  features: { title: string; description: string }[];
}
