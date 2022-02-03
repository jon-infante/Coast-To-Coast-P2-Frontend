import { Wallpost } from './wallpost';

export type Category = {
    
    ID: number;
    CategoryName: string;
    WallPosts: Wallpost[];
}