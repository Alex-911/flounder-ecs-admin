export interface ProductModel {
  id: string;
  title: string;
  brand: string;
  categoryId: string;
  subCategoryId: string;
  varient: string;
  description: string;
  users: string[];
  graphicsImage: string;
  images: string[];
  mrp: number;
  price: number;
  stock: number;
  searchKey: string[];
}
