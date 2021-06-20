/* Compass.js ©2021, Kar1m */

const Id = (id) => {  /* Getting an element by it's Id */
    return document.getElementById(id)
}

const Class = (className) => {  /* Getting an element by it's ClassName */
    return document.getElementsByClassName(className)
}

const Tag = (tagName) => {  /* Getting an element by it's TagName */
    return document.getElementsByTagName(tagName)
}

const get = (data) => {  /* Getting an element by anything (ex: .btn or #btn or button) */
    if(data.toString().startsWith("#")){
        return Id(data.replace("#", ""))
    }
    if(data.toString().startsWith(".")){
        return Class(data.replace(".", ""))
    }else{
        return Tag(data)
    }
}

const copyText = (text) => {
    const elem = document.createElement('textarea');
    elem.value = text;
    document.body.appendChild(elem);
    elem.select();
    document.execCommand('copy');
    document.body.removeChild(elem);
}

const RequestJSON = (url, method="GET") => {  /* Requests a url and returns JSON (add a .then((data) => { //code here })) */
    return fetch(`${url}`, {
        method: method.toString()
      })
      .then((response) => {
        return response.json()
      })
}

const setReadOnly = (ele) => {  /* Sets readonly */
    ele.readOnly = true
}

const rmReadOnly = (ele) => {  /* Disables readonly */
    ele.readOnly = false
}

const disableEle = (ele) => {  /* Disables an element */
    ele.disabled = true
}

const enableEle = (ele) => {  /* Disables an element */
    ele.disabled = false
}

const hideEle = (ele) => {  /* Hides an element */
    ele.style.display = "none"
}

const showEle = (ele, mode="unset") => {  /* Shows an element */
    ele.style.display = mode
}

const exit = (check, popupText) => { /* Closes Window */
    if(check){
        if(popupText == "" || popupText == null || popupText == undefined){
            popupText = "Close Window?"
        }
        if (confirm(popupText)) {
          close()
        }
    }else{
        close()
    }
}

const createEle = (data) => {  /* Creates an element */
    let ele = document.createElement(data["tagName"])

    if(data["className"] != undefined){
        ele.className = data["className"]
    }
    if(data["Id"] != undefined){
        ele.id = data["Id"]
    }
    if(data["style"] != undefined){
        ele.style = data["style"]
    }
    if(data["innerText"] != undefined){
        ele.innerText = data["innerText"]
    }
    if(data["innerHTML"] != undefined){
        ele.innerHTML = data["innerHTML"]
    }
    if(data["value"] != undefined){
        ele.value = data["value"]
    }
    if(data["onClick"] != undefined){
        ele.onclick = data["onClick"]
    }
    if(data["Name"] != undefined){
        ele.name = data["Name"]
    } 
    if(data["AppenderId"] != undefined){
        Id(data["AppenderId"]).appendChild(ele)
    }
    if(data["AppenderId"] == undefined){
        document.body.appendChild(ele)
    }
}