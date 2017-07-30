import '../styles/main.scss';

import logoImg from '../assets/images/logo.png';
import arrow from '../assets/images/down-arrow.png';
import pic from '../assets/images/pic/ron.jpg';
import notif from '../assets/images/notification.png';
import search from '../assets/images/search.png';
import money from '../assets/images/money.png';
import eyeimg from '../assets/images/eye.png';
import menu from '../assets/images/menu.png';
import menu2 from '../assets/images/menu2.png';
import dele from '../assets/images/del.png';
import checks from '../assets/images/check.png';

import loadImage from './loadImage';
import {showBtn, hideBtn} from './loadImage';
import http from './http-client';
import createTasks from './taskhandler';
import {handleHeaderUsers} from './taskhandler';

const imgObject = {
  "logoImg" : logoImg,
  "arrow" : arrow,
  "notif" : notif,
  "search" : search,
  "pic" : pic
}

window.onload = () =>{

  const header = document.getElementById("header");
  const allImages = header.querySelectorAll("#header img");

  allImages.forEach((img)=>{
    loadImage(img.id,imgObject[img.id]);
  })

  document.getElementById("moneyImg").src = money;
  document.getElementById("eyeimg").src = eyeimg;
  document.getElementById("menu").src = menu;
  document.getElementById("mobileMenu").src = menu;
  
  const menuicons = document.querySelectorAll(".menu2");

  menuicons.forEach((item)=>{
    item.src = menu2;
  })
  
  const del = document.querySelectorAll(".del");
  
  del.forEach((item)=>{
    item.src = dele;
  })

  const check = document.querySelectorAll(".check")
  check.forEach((item)=>{
    item.src = checks;
  })

  var profpic = document.createElement("img");
  profpic.setAttribute("src",eyeimg);
  document.getElementById("img").appendChild(profpic);

  http('get','../api/taskdata.json').then((response)=>{
    const resp = JSON.parse(response);
    console.log(resp);
    const taskdata = resp.tasks;
    const users = resp.users;

    handleHeaderUsers(users);
    createTasks(taskdata);

    let overdue = `${resp.overdue} overdue`;
    let spanDot = document.createElement('span');
    spanDot.innerHTML = overdue;
    spanDot.style.color = 'blue';
    document.getElementById("redDot").parentNode.appendChild(spanDot);

    let deadline = `${resp["approaching_deadline"]} approaching deadline`;
    let spanDotYe = document.createElement('span');
    spanDotYe.innerHTML = deadline;
    spanDotYe.style.color = 'blue';
    document.getElementById("yellowDot").parentNode.appendChild(spanDotYe);

    document.getElementById("numNotif").innerText = resp.notifications
  },(err)=>{
    console.log(err);
  })
}

window.showBtn = showBtn;
window.hideBtn = hideBtn;
