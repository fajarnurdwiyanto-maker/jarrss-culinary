import { useState, useEffect } from 'react';
import { Recipe } from '../types';
import { MOCK_RECIPES } from '../constants';

// In a real app, this would use Firebase
export const recipeService = {
  getRecipes: async () => {
    return MOCK_RECIPES;
  },
  getRecipeById: async (id: string) => {
    return MOCK_RECIPES.find(r => r.id === id) || null;
  },
  saveRecipe: async (recipeId: string) => {
    // Mock save logic
    console.log('Saved recipe:', recipeId);
    return true;
  }
};
