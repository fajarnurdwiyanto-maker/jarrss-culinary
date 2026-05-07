export interface Ingredient {
  item: string;
  amount: string;
  unit: string;
}

export interface Nutrition {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  difficulty: 'Mudah' | 'Sedang' | 'Sulit';
  prepTime: number; // minutes
  cookTime: number; // minutes
  servings: number;
  ingredients: Ingredient[];
  instructions: string[];
  tags: string[];
  rating: number;
  reviewsCount: number;
  nutrition?: Nutrition;
  authorId: string;
  authorName: string;
  isFeatured?: boolean;
}

export interface UserProfile {
  uid: string;
  displayName: string;
  email: string;
  photoURL?: string;
  savedRecipes: string[]; // recipe IDs
  preferences: string[];
}

export interface MealPlan {
  id: string;
  userId: string;
  startDate: string;
  days: {
    [key: string]: { // ISO date string
      breakfast?: string; // recipe ID
      lunch?: string;
      dinner?: string;
    };
  };
}
