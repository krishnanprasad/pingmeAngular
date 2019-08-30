import { BidTable } from './bid-table';

export interface ChitTimeTable {
    DurationID: number;
    StartDate: Date;
    EndDate: Date;
}
export interface CreateChitPost {
    UserId: string,
    ChitName: string,
    ChitDuration: number,
    ChitEMIAmount: number,
    TotalMembers: number,
    StartDate: Date,
    UserFinalChitDateTime: Array<ChitTimeTable>,
    UserBidDateTime: Array<BidTable>,
    DurationGap:number
}