import becks from '../assets/images/pic/becks.jpeg';
import cantona from '../assets/images/pic/cantona.jpeg';
import djoker from '../assets/images/pic/djoker.png';
import fed from '../assets/images/pic/fed.png';
import leo from '../assets/images/pic/leo.jpeg';
import nadal from '../assets/images/pic/rafa.jpeg';
import ron from '../assets/images/pic/ron.jpg';
import wazza from '../assets/images/pic/wazza.jpeg';

const picObj = {
    "becks" : becks,
    "cantona" : cantona,
    "djoker" : djoker,
    "fed" : fed,
    "leo" : leo,
    "nadal" : nadal,
    "ron" : ron,
    "wazza" : wazza
};


export default (tasks) => {
    
    const idea = tasks.filter((task)=>{
        return task.status.indexOf("idea")>-1;
    })
    
    const inpro = tasks.filter((task)=>{
        return task.status.indexOf("inpro")>-1;
    })

    const review = tasks.filter((task)=>{
        return task.status.indexOf("review")>-1;
    }) 

    const approved = tasks.filter((task)=>{
        return task.status.indexOf("approved")>-1;
    });

    
    ["idea","inpro","review","approved"].forEach((elem)=>{
        let obj = {
            "idea":idea,
            "inpro":inpro,
            "review":review,
            "approved":approved
        }
        
        handleIdeaList(obj[elem],elem);
    })
    
}

function handleIdeaList(arr,id){
    
    arr.forEach((idea)=>{
        

        //tasks main
        let task = document.createElement("div");
        task.setAttribute("class","tasks");

        //pic container
        let pic = document.createElement("div");
        pic.setAttribute("class","picContainer");

        let profePic = document.createElement("div");
        profePic.setAttribute("class","profPic");
        profePic.setAttribute("id","img");

        let profImg = document.createElement("img");
        profImg.setAttribute("src",picObj[idea.user]);
        profImg.style.width = '30px';

        profePic.appendChild(profImg);
        pic.appendChild(profePic);
        task.appendChild(pic);

        //text container
        let textcont = document.createElement("div");
        textcont.setAttribute("class","textContainer");

        let para = document.createElement("p");
        para.innerText = idea["task_name"];

        textcont.appendChild(para);
        task.appendChild(textcont);

        //arrow container
        let arrCont = document.createElement("div");
        arrCont.setAttribute("class","arrowContainer");

        if(idea.arrow){
            let arr = document.createElement("div");
            arr.setAttribute("class","arrowRight")
            arrCont.appendChild(arr);
        }else{
            let arr = document.createElement("div");
            arr.setAttribute("class","square")
            arrCont.appendChild(arr);
        }

        task.appendChild(arrCont);
        task.style["border-left"] = `1px solid ${idea.border}`;

        document.getElementById(id).appendChild(task);

    })
}

export const handleHeaderUsers = (users) => {
    users.forEach((user)=>{
        let round = document.createElement('div');
        round.setAttribute("class","reqdRound");
        console.log(user);
        
        let span = document.createElement('span');

        let img = document.createElement("img");
        img.setAttribute("src",picObj[user]);
        img.style.width = "36px";
        img.style.height = "36px";

        span.appendChild(img);
        round.appendChild(span);
        document.getElementById("profileIcons").appendChild(round);

    })
    let elliptical = document.createElement('div');
        elliptical.setAttribute("class","elliptical");
        let spanEll = document.createElement('span');
        spanEll.innerText="+42";
        elliptical.appendChild(spanEll);
        document.getElementById("profileIcons").appendChild(elliptical);
}