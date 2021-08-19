
const baseUrl = "http://fundoonotes.incubation.bridgelabz.com/api/";

export function registration(data){

   servicereq('user/userSignUp','post',data)
  //  redirect 

}

//service
function servicereq (url,meth,data){
  console.log(data);
  fetch(baseUrl+url, {
  method:meth,
  body: JSON.stringify(data),
           mode: 'cors',
           headers: {
             'Content-Type': 'application/json',
         }
  })
  .then( response => response.json() )
  .then( data => console.log(data) )

  .catch(error => {
    console.error('Error:', error);
  });
}
