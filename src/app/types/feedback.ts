import { Service } from './service';

export interface Feedback {
  id: number;
  attributes: {
    createdAt: Date;
    updatedAt: Date;
    publishedAt?: Date;
    name?: string;
    phoneNumber?: string;
    service?: { data: Service };
  };
}
