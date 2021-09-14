class RecipeService {
    getAll = async () => {
        const apikey = process.env.REACT_APP_APIKEY;

        try {
            const apiCall = await fetch(`https://api.spoonacular.com/recipes/random?number=6&apiKey=${apikey}`);
            const data = await apiCall.json();
            return data;
        } catch (error) {
            alert(error);
        }
    };

    getRecipeByIndex = async (index) => {
        const apikey = process.env.REACT_APP_APIKEY;
        try {
            if (!index) {
            } else {
                const apiCall = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${index}&addRecipeInformation=true&number=100&apiKey=${apikey}`);
                const data = await apiCall.json();
                return data;
            }
        } catch (error) {
            alert(error);
        }
    };

    getRecipeById = async (id) => {
        const apikey = process.env.REACT_APP_APIKEY;
        try {
            if (!id) {
            } else {
                const apiCall = await fetch(`https://api.spoonacular.com/recipes/${id}/information?number=1&apiKey=${apikey}`);
                const data = await apiCall.json();
                return data;
            }
        } catch (error) {
            alert(error);
        }
    };
}
export default new RecipeService();
