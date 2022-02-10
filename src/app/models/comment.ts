import { Like } from './like';

export type Comment = {
    ID: number;
    DrawingID: number;
    UserID: number;
    Username: string;
    Message: string;
    Likes: Like[];
    Date: string;
    IsLiked: boolean;
}