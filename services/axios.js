var axios = require("axios");
const BASE_URL = 'http://fundoonotes.incubation.bridgelabz.com/api/';

const getDataItems = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/todos?_limit=5`);

    const dataItems = response.data;

    console.log(`GET: Here's the list of data`, dataItems);

    return dataItems;
  } catch (errors) {
    console.error(errors);
  }
};