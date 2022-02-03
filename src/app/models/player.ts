import { Drawing } from './drawing';

export type Player = {
        ID: number;
        Username: string
        Password: string;
        CorrectGuesses: number;
        TotalGuesses: number;
        //Top 5 results are produced when a guess is made, this is the average score 0-5
        AverageResult: number;
        //A score is assigned to each of the top 5 results, ranging from 0-1
        AverageScore: number;
        Drawings: Drawing[];

}
