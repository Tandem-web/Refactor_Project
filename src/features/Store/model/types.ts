export interface Category{
    id: number;
    name: string;
    image: string;
    slug: string;
}
export interface Product{
    id:	number;
    title: string;
    price: number;
    description: string;
    category: Category;
    images: string[];
    creationAt: string;
    updatedAt: string;
}

export type Products = Product[];