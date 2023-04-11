export interface ICommentRequest {
  description: string;
  adId: string;
}

export interface IComment {
  id: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICommentUpdate {
  description: string;
}
