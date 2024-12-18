import { Category, categoryColors } from "./category";

export class CategoryClass {
    private id?: number;
    private name: Category;
    private color: string;
  
    constructor(category: { id?: number; name: Category }) {
      this.id = category.id;
      this.name = category.name;
      this.color = categoryColors[category.name]; 
    }
  
    getId(): number | undefined {
      return this.id;
    }
  
    getName(): Category {
      return this.name;
    }
  
    getColor(): string {
      return this.color;
    }
  }
  