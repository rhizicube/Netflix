export class Movie {
    public title: string;
    public info: string;
    public catogory: string;
    public imgPath: string;

    constructor( title: string, info: string, catagory: string, imgPath: string, ){
        this.title = title
        this.info = info
        this.catogory = catagory
        this.imgPath = imgPath;
        
    }
}