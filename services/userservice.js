import axiosfile from './axiosservice';
const form = document.querySelector('form');

form.addEventListener('submit', async event => {
  event.preventDefault();

  const title = document.querySelector('#small').value;

  let data = {
    "firstName": this.state.firt,
    "lastName": this.state.las,
    "email": "jhdb@gmail.com",
    "service": "advance",
    "password": "jsbfvjhdbf"
}

  const submitDataItem = await addDataItem(data);
  updateDataList(submitDataItem);
});