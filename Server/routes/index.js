var express = require('express');
var router = express.Router();

const recipeController = require('../controllers/RecipeController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Bienvenido a Cookify!');
});

// Recipes routes
router.route('/recipes')
  .get(recipeController.getAllRecipes)
  .post(recipeController.createRecipe);
router.route('recipes/:id')
  .get(recipeController.getRecipeById)
  .put(recipeController.updateRecipe)
  .delete(recipeController.deleteRecipe);
// router.get('/recipes', recipeController.getAllRecipes);
// router.get('/recipes/:id', recipeController.getRecipeById);
// router.post('/recipes', recipeController.createRecipe);
// router.put('/recipes/:id', recipeController.updateRecipe);
// router.delete('/recipes/:id', recipeController.deleteRecipe);

module.exports = router;
