const wrapper = document.querySelector(".wrapper");
const toast = wrapper.querySelector(".toast");
const wifiIcon = wrapper.querySelector(".material-symbols-outlined");
const title = wrapper.querySelector("span");
const subTitle = wrapper.querySelector("p");

window.onload = () => {
  function ajax() {
    let xhr = new XMLHttpRequest(); // creating new xml object
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    xhr.onload = () => {
      if (xhr.status == 200 && xhr.status < 300) {
        toast.classList.remove("offline");
        title.innerText="You're online now";
        subTitle.innerText="Hurry!Internet is Connected";
        wifiIcon.innerHTML='<span class="material-symbols-outlined" >wifi</span>';
            } else { offline() }
    };
    xhr.onerror = () => {
      offline();
      console.log("offline")
    };
    xhr.send();
  }

  function offline(){
    toast.classList.add("offline");
    title.innerText="You're offline now";
    subTitle.innerText="Opps! Internet is disconnected";
    wifiIcon.innerHTML='<span class="material-symbols-outlined"> wifi_off</span>'
  }
  setInterval(()=>{
    ajax();
  },100)
  ajax();
};

// Head Title 
let windowTitle=document.title;
 window.addEventListener("blur" , ()=> {
  document.title="We are Missing You"
 });
 window.addEventListener("focus" , ()=>{
  document.title=windowTitle
 })
