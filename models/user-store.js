import { v4 as uuidv4 } from "uuid";
import { JsonStore } from "./json-store.js";

const store = new JsonStore("./models/users.json", {
  users: [],
});

export const userStore = {
  async getAllUsers() {
    await store.read();
    return store.data.users;
  },

  async getUserByEmail(email) {
    await store.read();

    return store.data.users.find(
      (user) => user.email === email
    );
  },

  async addUser(user) {
    await store.read();

    user._id = uuidv4();

    store.data.users.push(user);

    await store.write();

    return user;
  },
};