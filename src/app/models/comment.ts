import { Like } from './like';

export type Comment = {
    ID: number;
    DrawingID: number;
    UserID: number;
    Message: string;
    Likes: Like[];
    Date: string;
    IsLiked: boolean;
}