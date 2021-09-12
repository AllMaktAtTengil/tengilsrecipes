class RecipeService {

    getAll = async () => {
        const apikey = process.env.REACT_APP_APIKEY

        try {
            const apiCall = await fetch(`https://api.spoonacular.com/recipes/complexSearch?number=100&apiKey=${apikey}`);
            const data = await apiCall.json();
            return data;
        } catch (error) {
            alert(error);
        }
    }

    getRecipeByIndex = async (index) => {
        const apikey = process.env.REACT_APP_APIKEY
        try {
            if (!index) {
            } else {
                const apiCall = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${index}&number=100&apiKey=${apikey}`);
                const data = await apiCall.json();
                return data;
            }
        } catch (error) {
            alert(error);
        }
    }
}
export default new RecipeService();