class RecipeService {
    /**
     * fetches random joke from api
     * @returns json-text.
     */

    getRandomJoke = async () => {
        const apikey = process.env.REACT_APP_APIKEY;

        try {
            const apiCall = await fetch(`https://api.spoonacular.com/food/jokes/random?apiKey=${apikey}`);
            const data = apiCall.json();
            return data;
        } catch (error) {
            alert(error);
        }
    };

    /**
     * fetches 12 random recipe objects.
     * @returns list of objects
     */

    getRandom = async () => {
        const apikey = process.env.REACT_APP_APIKEY;

        try {
            const apiCall = await fetch(`https://api.spoonacular.com/recipes/random?number=12&apiKey=${apikey}`);
            const data = await apiCall.json();
            return data;
        } catch (error) {
            alert(error);
        }
    };

    /**
     *
     * @param {*} index takes an varibale from searchbar.
     * @returns specified list of that object.
     */

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

    /**
     * Sorted list by either best rated or most likes.
     * @param {*} index takes a let with either popularity or meta-score
     * @returns a sorted list of objects.
     */

    getRecipeByCustom = async (index) => {
        const apikey = process.env.REACT_APP_APIKEY;
        try {
            if (!index) {
            } else {
                const apiCall = await fetch(`https://api.spoonacular.com/recipes/complexSearch?sort=${index}&addRecipeInformation=true&number=100&apiKey=${apikey}`);
                const data = await apiCall.json();
                return data;
            }
        } catch (error) {
            alert(error);
        }
    };

    /**
     *
     * @param {*} id takes ID number
     * @returns list of specified object.
     */

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
