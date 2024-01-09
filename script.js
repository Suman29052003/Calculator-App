function appendToDisplay(value){
    document.getElementById('input').value+=value
}

function clearInput(){
    document.getElementById("input").value = ""
}

function eval(){
    try{
        const result = eval(document.getElementById('input').value) 
        if(!isNaN(result)){
            document.getElementById('input').value = result;
        }
        else{
            document.getElementById('input').value = "Error"
        }
    }
    catch(error){
        document.getElementById('input').value = "Error"
    }
    
}