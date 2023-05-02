import axios from "axios";
import { USER_API_URL } from "./Constants";

/*This function makes a get request to the Api url with the specified 'page' query parameters. */

/*It returns a Promise that resolves to the response object if the request is successful, or an error if it fails. Any error is
caught and an alert is displayed to the user.*/
export const fetchUsers = () => {
  return axios.get(USER_API_URL)
      .catch((error) => {
        alert(error);
      });
  };
