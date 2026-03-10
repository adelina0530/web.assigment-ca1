import fs from "fs";

const rawData = fs.readFileSync("./models/movie-store.json");
const movieCollection = JSON.parse(rawData);

const movieStore = {

  getCategory(id) {
    return movieCollection.categoryCollection.find(
      category => category.id === id
    );
  },

  getAllCategories() {
    return movieCollection.categoryCollection;
  },

};

export default movieStore;