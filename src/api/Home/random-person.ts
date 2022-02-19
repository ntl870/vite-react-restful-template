import { clientAPI } from "../axios";

export const getRandomPerson = () => clientAPI.get("/api/users/random_user");
