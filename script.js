// your code here
function sharableUrl(){
    let name_input = document.getElementById('name');
    let year_input = document.getElementById('year');
    let h3_content = document.getElementById('url');
    let generated_url = getGeneratedUrl(name_input.value, year_input.value)
    h3_content.innerHTML = generated_url
}
function getGeneratedUrl(name, year){
    let generated_url = "https://localhost:8080/";
    if(name_input && year_input){
        generated_url += "?name=" + name + "&year=" + year;
        
    }
    else if(name_input && !year_input){
        generated_url += "?name=" + name; 
    }
    else{
        generated_url = "?year=" + year
    }
    return generated_url;
}
