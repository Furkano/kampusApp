export class Post{
    id:number;
    userId:number;
    content?:string;
    createDate:Date;
    editDate:Date;
    categoryId:number;
    subCategoryId?:number;
    postType:number;
    startDate?:Date;
    endDate?:Date;
    price?:number;
}