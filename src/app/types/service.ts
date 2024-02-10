export interface Service {
  id: number;
  attributes: {
    createdAt: Date;
    updatedAt: Date;
    publishedAt?: Date;
    name?: string;
    minPrice?: number;
  };
}
