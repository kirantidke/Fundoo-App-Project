
const baseUrl = "http://fundoonotes.incubation.bridgelabz.com/api/";

export function registration(data){

   servicereq('user/userSignUp','post',data)
  //  redirect 

}

function servicereq (url,meth,data){
  fetch(baseUrl+url, {
  method:meth,
  body: JSON.stringify(data)
  })
  .then(result => {
     return console.log('Success:', result);
  })
  .catch(error => {
    console.error('Error:', error);
  });
}