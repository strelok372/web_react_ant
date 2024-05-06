export interface Lesson {
    products: Post[]
}

export interface Post {
   id: number;
   title: string;
   description: string;
   thumbnail: any;
   price: number;
}