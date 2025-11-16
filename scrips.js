function addTask(){
    let textInput = document.querySelector("input").value

    let li = document.createElement('li')
    li.innerHTML = textInput + '<span onclick="deletTask(this)">❌</span>'

    document.querySelector("ul").appendChild(li)

    document.querySelector("input").value = ""
}

function deletTask(li){
    li.parentElement.remove()
}



