



let navbars = () =>
{
    return `
  <div id="navbar">
<div id="Inside_Text">
   <p>Delevering in Mumbai and Delhi |Same  day Delivery !</p>
</div>
</div>
<div id="Below_Navbar">
        <select>
        <option value=""> SHOP </option>
        </select>
        <select name="" id="">
                <option value="">LEARN</option>
                <option value=""></option>
                <option value=""></option>
        
        </select>
        <select name="" id="">
                <option value="">GROW</option>
        </select>
         <img id="kimye_logo"  src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/website-logo_400x.png?v=1596288204" alt="">
         <div id="font_awesome"></div>
</div>

`
}
export  default navbars;





class kimye_products{
    constructor(img,n,d)
    {
        this.img=img;
        this.name=n;
        this.decp=d;
    }
}



let result = new  kimye_products("https://cdn.shopify.com/s/files/1/0449/5225/6667/collections/recommended-2-min_670x.jpg?v=1614339080","ALL FRUITS","Pick and choose from a wide range of delicious fruits")
console.log(result)
let img_1=  new kimye_products("https://cdn.shopify.com/s/files/1/0449/5225/6667/collections/recommended-2-min_670x.jpg?v=1614339080","FRESH CUTS","Pick and choose from a wide range of delicious fruits","ALL FRUITS","Pick and choose from a wide range of delicious fruits")
let img_2 = new kimye_products("https://cdn.shopify.com/s/files/1/0449/5225/6667/collections/recommended-3-min_670x.png?v=1614338730","FRESH CUTS","We want to spoon-feed you… quite literally")
let img_3 = new kimye_products("https://cdn.shopify.com/s/files/1/0449/5225/6667/collections/recommended-2-min_670x.jpg?v=1614339080","FRUIT COMBOS","Indulge in fruit combinations created by us")
let img_4 = new kimye_products("https://cdn.shopify.com/s/files/1/0449/5225/6667/files/Untitled_design_6_670x.png?v=1634808861","GIFTS BY KIMAYE","Healthy & memorable gifts for your loved ones")

let final=[];

final.push(img_1,img_2,img_3,img_4)

console.log(final)


 final.forEach((elem) => {
     

    let Product = document.getElementById("Product_Div")

            let div = document.createElement("div")
             div.setAttribute("id","divs")

            let name = document.createElement("p")
            name.innerText=elem.name;
            name.setAttribute("id","name")
                //console.log(name)

            let img = document.createElement("img")
            img.setAttribute("src",elem.img)
            img.setAttribute("id","Product_Div_img")
                //console.log(img)
            let decp = document.createElement("p")
            decp.innerText=elem.decp;
            decp.setAttribute("id","decp")
                // console.log(decp)

            let btn = document.createElement("button")
            btn.innerText="Shop Now";
            btn.setAttribute("id","btn")


            div.append(img,name,decp,btn)
            Product.append(div)


        
 });



 let body =  document.querySelector("Body")
 body.addEventListener("click",myfun)
 function myfun()
 {
     window.location.href="addtocart.html"
 }