export class Filter {
    link:string;
    filters:{
        page:number;
        offset:number;
        id?:number;
        dateFrom?:Date;
        dateTo?:Date;
    }
}