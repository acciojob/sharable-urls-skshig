// your code here
let name_input = document.getElementById('name');

let year_input = document.getElementById('year');

let h3_content = document.getElementById('url');

function sharableUrl(){
    if(name_input && year_input){
        h3_content.innerText += "?name=" + name_input.value + "?year=" + year_input.value;
    }
    else if(name_input && !year_input){
        h3_content.innerText += "?name=" + name_input.value;
    }
    else{
        h3_content.innerText = "?year=" + year_input.value
    }
    return h3_content.innerText;
}
