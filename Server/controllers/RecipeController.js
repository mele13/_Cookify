const Recipe = require('../models/recipe');

async function createRecipe(req, res) {
    try {
        const { title, description, ingredients, directions, image_url } = req.body;
        const recipe = await Recipe.create({
            title,
            description,
            ingredients,
            directions,
            image_url,
        });
        res.status(201).json(recipe);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}
async function getAllRecipes(req, res) {
    try {
        const recipes = await Recipe.findAll();
        res.status(200).json(recipes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

async function getRecipeById(req, res) {
    const id = req.params.id;
    try {
        const recipe = await Recipe.findByPk(id);
        if (recipe) {
            res.status(200).json(recipe);
        } else {
            res.status(404).json({ message: `Recipe with id ${id} not found` });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

async function updateRecipe(req, res) {
    const id = req.params.id;
    try {
        const recipe = await Recipe.findByPk(id);
        if (recipe) {
            const { title, description, ingredients, directions, image_url } = req.body;
            await recipe.update({
                title,
                description,
                ingredients,
                directions,
                image_url,
            });
            res.status(200).json(recipe);
        } else {
            res.status(404).json({ message: `Recipe with id ${id} not found` });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

async function deleteRecipe(req, res) {
    const id = req.params.id;
    try {
        const recipe = await Recipe.findByPk(id);
        if (recipe) {
            await recipe.destroy();
            res.status(204).end();
        } else {
            res.status(404).json({ message: `Recipe with id ${id} not found` });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

module.exports = {
    createRecipe,
    getAllRecipes,
    getRecipeById,
    updateRecipe,
    deleteRecipe,
};
