// your code here
function sharableUrl(){
    let name_input = document.getElementById('name');
    let year_input = document.getElementById('year');
    let h3_content = document.getElementById('url');
    
    if(name_input && year_input){
        h3_content.innerHTML =  "https://localhost:8080/";
        h3_content.innerHTML += "?name=" + name_input.value + "&year=" + year_input.value;
        
    }
    else if(name_input && !year_input){
        h3_content.innerHTML += "?name=" + name_input.value; 
    }
    else{
        h3_content.innerHTML = "?year=" + year_input.value
    }
    return h3_content.innerHTML;
   
}
