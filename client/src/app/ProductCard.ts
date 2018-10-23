export interface ProductCard{
    id:String,
    imageUrl: String,
    caption: String,
    Product:{ title: String; list: String[]}[]
}