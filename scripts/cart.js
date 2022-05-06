

let arr = JSON.parse(localStorage.getItem("save")) || [];


 arr.forEach((elem) => {
    let img_of_elem = document.getElementById("img_of_elem")
    img_of_elem.innerHTML=null;

        let  img = document.createElement("img")
        img.setAttribute("id","imgs")
        img.setAttribute("src",elem.img)
      
         img_of_elem.append(img)      
  });


   arr.forEach((elem) => {
       console.log(elem)


       let Product = document.getElementById("decp_of_elem")
        Product.innerHTML=null;

       let div = document.createElement("div")
         div.setAttribute("id","div")
         div.innerHTML=null;
  
        let name = document.createElement("h2")
        name.innerText=elem.name;
        name.setAttribute("id","name")
        
        let decp_dd = document.createElement("div")
        decp_dd.setAttribute("id","decp_dd")
        decp_dd.innerText=` ${elem.name} : are oblong shaped berries with a dark red to dark black colored skin with starkly contrasting pinkish- white flesh. The flesh is extremely juicy and has a flavor that combines sweet and tart with a slightly astringent aftertaste. The dark-colored skin leaves a stain on the lips and mouth that can last for several hours.`
       
        let p = document.createElement("p")
           p.innerText="Origin : Maharashtra, India"
     
           let p2 = document.createElement("p")
           p2.innerText="Kimaye Seasonal : Fruits sourced from the most capable local partners who adhere to our safety standards and delivered through a contamination-free process by Kimaye."
     
           let p3 = document.createElement("p")
           p3.innerText=" Weight : 250g"

           let price = document.createElement("h4")
           price.innerText=elem.price;
           price.setAttribute("id","price")


             
        let R_btn = document.createElement("button")
        R_btn .innerText="Add To Cart";
        R_btn .setAttribute("id","btn")
        R_btn .addEventListener("click",function(){

            Remove_elem(elem)

          
        })
           
        
         decp_dd.append(p,p2,p3,price,R_btn)
         div.append(name)

   
    Product.append(div,decp_dd)
    

 
});
function Remove_elem(elem)
{
 alert("Item Added To Cart")
 window.location.href="Cart_item.html.html"
}


 