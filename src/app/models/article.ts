export class Article {

    constructor(
        public _id: string, //en TS los tipos van en minúscula!
        public title: string,
        public content: string,
        public date: any,
        public image: string
    ) {

    }

}