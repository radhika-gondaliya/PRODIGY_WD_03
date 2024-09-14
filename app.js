let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let msg=document.querySelector("#msg");
let newgame=document.querySelector("#newgame");
let msgcontainer=document.querySelector(".msg-container")
let  turnO=true;
let count=0;
let winpatterns=[
    [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

let resetgame=()=>{
    turnO=true;
    enableboxes();
    msgcontainer.classList.add("hide");

};


boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("box was print");
        if(turnO===true){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
           turnO=true;
        }
            box.disabled=true;
            checkwinner();
    });
    
});


  let disableboxes=()=>{
    for(let  box of boxes){
    box.disabled=true;
    }
}

let enableboxes=()=>{
    for(let  box of boxes){
    box.disabled=false;
    box.innerText="";
    }
}


let showwinner=(winner)=>{
    msg.innerText= `congratulation winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
    
};
let checkwinner=()=>{
    for(let pettern of winpatterns){
    let pos1val=boxes[pettern[0]].innerText;
    let pos2val=boxes[pettern[1]].innerText;
    let pos3val=boxes[pettern[2]].innerText;

    if(pos1val !="" && pos2val!="" && pos3val !=""){
        if(pos1val===pos2val && pos2val===pos3val){
            console.log("winner",pos1val);
            showwinner(pos1val);
            return true;
        }
    }            

    }
};
resetbtn.addEventListener("click",resetgame);
newgame.addEventListener("click",resetgame);


