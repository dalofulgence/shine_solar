// 
window.addEventListener('load', ()=>{
    console.log('here is the page'); // Testing if i am getting any response

    const xhttp = new XMLHttpRequest(); //  variable for the request
    xhttp.onload = function() {

        let text = JSON.parse(this.responseText); // get data from json to js object

        let table = "<table class='table'>" + "<tr>" + "<th>" + "name" + "</th>" + "<th>" + "Website" + "</th>" +
        "<th>" + "Email" + "</th>" + "<th>" + "Address" + "</th>" + "</tr>" ; // create table

        // looping through the data array to dysplay info
        for (let i = 0; i < text.length; i++){
            table += 
            "<tr id='pup'>" +
             "<td  class='name'>" + text[i].name + "</td>" +
             "<td>" + text[i].website + "</td>" +
             "<td>" + text[i].email + "</td>" +
             "<td>" + text[i].address.street + "," + text[i].address.city + " " + text[i].address.zipcode + "</td>" + "</tr>";
        }
        table += "</table>"; 
        document.getElementById("info").innerHTML = table; // insert table into this div
  
    }
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/users "); // site to get data from
    xhttp.send(); 
    

})

