import { Like } from './like';

export type Drawing = {
    ID: number;
    PlayerID: number;
    WallPostID: number;
    Keyword: string;
    BucketImage: string;
    Guess: boolean;
    GoogleScore: number;
    GoogleResponse: string;
    Likes: Like[];
    Date: string;

}