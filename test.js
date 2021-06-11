
 
 var element= document.getElementById("mi");
 var base= document.getElementById("base");
 var id1= document.getElementById("ig1");
 var id2= document.getElementById("ig2");
 var id3= document.getElementById("ig3");
 var id4= document.getElementById("ig4");
 var id5= document.getElementById("ig5");

 var t11= document.getElementById("t1");
 var t22= document.getElementById("t2");
 var t33= document.getElementById("t3");
 var t44= document.getElementById("t4");
 var t55= document.getElementById("t5");

 const ids=[id1,id2,id3,id4,id5];
 var curr=0;
 const arr=["https://images.unsplash.com/photo-1561948955-570b270e7c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80","https://images.unsplash.com/photo-1606787620819-8bdf0c44c293?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80","https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80","https://images.unsplash.com/photo-1623206837956-07dab21608f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80","https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"]
 var prev;
 const title=["cat.jpeg", "cooking couple shoot portofilio(1).jpg","bali-kelingking-beach-plastic-removal-drive.key","NextByk Investor Pitch 2021.ppt","interns-performance-report-june-2021.key"];
 const shortenTitle= (title) =>{
  const length= title.length;
  if(length>33){
    var ans= title.slice(0,15)+ '...' + title.slice(length-15,length);
   
   }
   else{
     ans=title;
   }
   return ans;
};

t11.innerHTML= shortenTitle(title[0]);
t22.innerHTML= shortenTitle(title[1]);
t33.innerHTML= shortenTitle(title[2]);
t44.innerHTML= shortenTitle(title[3]);
t55.innerHTML= shortenTitle(title[4]);

ids[curr].style.backgroundColor="white";
            curr++;
            curr--;
            element.src=arr[curr];
            base.innerHTML=title[curr];
            ids[curr].style.backgroundColor="rgb(35, 135, 216)";
           prev=curr;




 id1.addEventListener("click",()=>{
    ids[prev].style.backgroundColor="white";
    element.src=arr[0];
    curr=0;
    prev=curr;
    base.innerHTML=title[curr];
    ids[curr].style.backgroundColor="rgb(35, 135, 216)";
   
});

id2.addEventListener("click",()=>{
    element.src=arr[1];
    ids[prev].style.backgroundColor="white";
    curr=1;
    prev=curr;
    base.innerHTML=title[curr];
    ids[curr].style.backgroundColor="rgb(35, 135, 216)";
   
})
    id3.addEventListener("click",()=>{
    element.src=arr[2];
    ids[prev].style.backgroundColor="white";
    curr=2;
    prev=curr;
    base.innerHTML=title[curr];
    ids[curr].style.backgroundColor="rgb(35, 135, 216)";
    
})
id4.addEventListener("click",()=>{
    element.src=arr[3];
    ids[prev].style.backgroundColor="white";
    curr=3;
    base.innerHTML=title[curr];
    ids[curr].style.backgroundColor="rgb(35, 135, 216)";
    prev=curr;

    
})
id5.addEventListener("click",()=>{
    element.src=arr[4];
    ids[prev].style.backgroundColor="white";
    curr=4;
    base.innerHTML=title[curr];
    ids[curr].style.backgroundColor="rgb(35, 135, 216)";
    prev=curr;
   
})



window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }
  
    switch (event.key) {
      case "Down": // IE/Edge specific value
      case "ArrowDown":
        if(curr!=4){
            
            ids[curr].style.backgroundColor="white";
            curr++;
            element.src=arr[curr];
            base.innerHTML=title[curr];
            ids[curr].style.backgroundColor="rgb(35, 135, 216)";
           prev=curr;
        }
        break;
      case "Up": // IE/Edge specific value
      case "ArrowUp":
        if(curr!=0){
            ids[curr].style.backgroundColor="white";
            curr--;
            element.src=arr[curr];
            base.innerHTML=title[curr];
            ids[curr].style.backgroundColor="rgb(35, 135, 216)";
            prev=curr;
        }
        break;
      
    }
  
    event.preventDefault();
  }, true);
