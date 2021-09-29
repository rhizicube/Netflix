export class Movie {
    public title: string;
    public uniqueId: number;
    public catogory: string;
    public description: string;
    public imgPath: string;

    constructor( title: string, uniqueId: number, catagory: string, description: string, imgPath: string, ){
        this.title = title;
        this.uniqueId = uniqueId;
        this.catogory = catagory;
        this.description = description;
        this.imgPath = imgPath;
        
    }
}