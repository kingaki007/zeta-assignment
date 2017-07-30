export default (id,logo) => {
    const imageTag = document.getElementById(id);
    imageTag.src = logo;
}

export const showBtn=(obj)=>{
    console.log(obj.parentNode.childNodes);
    const parent = obj.parentNode.childNodes;
    parent.forEach((item)=>{
        if(item.className=="inpActions"){
            item.style.display = "block";
        }
    })
}

export const hideBtn=(obj)=>{
    const parent = obj.parentNode.childNodes;
    parent.forEach((item)=>{
        if(item.className=="inpActions"){
            item.style.display = "none";
        }
    })
}