import { TypeRecord } from "./TypeRecord.enum";

export interface Record {
   id?: string;
   typeRecord: TypeRecord;
   description: string;
   amount: number;
}