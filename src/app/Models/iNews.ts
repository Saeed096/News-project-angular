import { DatePipe } from "@angular/common";

export interface iNews {
    id : number; 
    title : string;
   news : string;
  // imageFile : File;   
    publicationDate : Date;
  // creationDate : Date;
   authorId : number;
   image : string;
}
