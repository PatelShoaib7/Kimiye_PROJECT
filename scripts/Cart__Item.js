
let arr = JSON.parse(localStorage.getItem("save")) || [];


function add(arr)
{
    let img_to_append = document.getElementById("img_to_append")
    img_to_append.innerHTML=null;
  arr.forEach((elem,index,array) => {
   
 
    let div = document.createElement("div")
    div.setAttribute("id","Appending_img_div")


    let btn = document.createElement("button")
      btn.setAttribute("id","remove")
      btn.innerText="Remove";
      btn.addEventListener("click", function()
      {
          Remove_ele(index)
      })
    let img_of = document.createElement("img")
    img_of.setAttribute("id","imgess")
    img_of.setAttribute("src",elem.img)

    let name = document.createElement("h2")
    name.innerText=elem.name;
    name.setAttribute("id","name")

    let price = document.createElement("h4")
    price.innerText=elem.price
    price.setAttribute("id","price")
   
    //.price)

    let plus = document.createElement("h2")
      plus.innerText="+"

    let quant = document.createElement("h1")
    quant.innerText=`+ ${1}  -`;
    quant.setAttribute("id","quant")

    div.append(btn,img_of,name,quant,price)
    img_to_append.append(div)

  });

  
let total = arr.reduce(function(acc,elem,index){
    console.log(elem.price)
return  acc+ Number(elem.price)

},0)
console.log(total)


let final = document.getElementById("Final")
let SUBTOTAL = document.getElementById("SubTotal")
let sub = document.getElementById("Sub")
sub.innerText=` Rs ${total}`;

 

}

   function Remove_ele(index)
   {
       arr.splice(index,1)

       localStorage.setItem("save",JSON.stringify(arr))
        add(arr)
   }
   


   add(arr)