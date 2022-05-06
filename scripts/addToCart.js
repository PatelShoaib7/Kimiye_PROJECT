


let navbars = () =>
{
    return `
  <div id="navbar">
<div id="Inside_Text">
   <p>Delevering in Mumbai and Delhi |Same  day Delivery !</p>
</div>
</div>
<div id="Below_Navbar">
<select id="select" onchange="Sort_It()">
<option value=""> SHOP </option>
<option value="High">Hight To Low</option>
 <option value="Low">Low To High</option>
</select>
        <select name="" id="">
                <option value="">LEARN</option>
                <option value=""></option>
                <option value=""></option>
        
        </select>
        <select name="" id="select">
                <option value="">GROW</option>
        </select>
         <img id="kimye_logo"  src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/website-logo_400x.png?v=1596288204" alt="">
         <div id="font_awesome"></div>
</div>

`
}
export  default navbars;


class cart{
    constructor(img,name,price)
    {
        this.img=img;
        this.name=name;
        this.price=price;
    }
}

let a = new cart("https://cdn.shopify.com/s/files/1/0449/5225/6667/products/image_720x.jpg?v=1620889338","Kimaye Jamun (250 gm)","189")
let b= new cart("https://cdn.shopify.com/s/files/1/0449/5225/6667/products/MicrosoftTeams-image_1_360x.jpg?v=1649415923","Kimay Summer Combo","477")
let c= new cart("https://cdn.shopify.com/s/files/1/0449/5225/6667/products/cover_19473cce-96ae-4149-aaa1-508f17ac6c28_360x.jpg?v=1648186636","Kemay Watermelon","79")
let d= new cart("https://cdn.shopify.com/s/files/1/0449/5225/6667/products/cover_360x.jpg?v=1647932788","Kimay Green Apple","249")
let e= new cart("https://cdn.shopify.com/s/files/1/0449/5225/6667/products/MangoCover_908c34e6-fcdb-4564-918e-48d7baeaf628_360x.jpg?v=1645445684","Kimaye Green Apples","1499")
let f= new cart("https://cdn.shopify.com/s/files/1/0449/5225/6667/products/5e8b2ee6-ce8e-42e9-959f-d43c544f586a_360x.png?v=1616326949","Kimaye Alphonso Mangoes","1520")
let g= new cart("https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Chiku-cover_7b7702b6-dbf6-4d51-aabd-70df2f5e4195_360x.jpg?v=1646830414","Kimaye BlueBerries","250")
let h= new cart("https://cdn.shopify.com/s/files/1/0449/5225/6667/products/cover-Mango-badami_360x.jpg?v=1620473077","","149")
let i= new cart("https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Avocado_360x.jpg?v=1622045722","","159")
let j= new cart("https://cdn.shopify.com/s/files/1/0449/5225/6667/products/463b5516-614a-4a66-9556-f4a09e45afbc_360x.png?v=1614326370","Kimaye Sapota","156")
let k= new cart("https://cdn.shopify.com/s/files/1/0449/5225/6667/products/a0cfceb5-76a4-4994-9d37-978c6dc3b309_360x.png?v=1611811512","Kimaye Badami Mangoes","123")
let l= new cart("https://cdn.shopify.com/s/files/1/0449/5225/6667/products/069bdaa3-eca4-4f4c-8f02-970a626f7be3_360x.png?v=1616393545","Kimaye Avocado Imported","155")
let m= new cart("https://cdn.shopify.com/s/files/1/0449/5225/6667/products/9ebb0dfa-3897-42a3-97be-5a0ecb8491f8_360x.png?v=1615016898","Kimaye Pera Green","160")
let n= new cart("https://cdn.shopify.com/s/files/1/0449/5225/6667/products/dbe751de-009c-4454-a3f1-42375be8bb15_360x.png?v=1614859367","Kimaye Imported Orange","159")
let o= new cart("https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Grapescombo_360x.png?v=1641883595","Kimaye Royal Gala Apples","1479")
let p= new cart("https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Grapescombo_1_360x.png?v=1642492575","Kimaye Grapes (Flames Seedless(500g & 2kg))","43")
let r= new cart("https://cdn.shopify.com/s/files/1/0449/5225/6667/products/grapefruit-cover_360x.jpg?v=1639461484","Kimaye Grapes ( Super Sonaka Seedless(500g & 2kg))","129")
let s= new cart("https://cdn.shopify.com/s/files/1/0449/5225/6667/products/golden-kiwi-cover_360x.jpg?v=1625147312","Kimaye Grapes (Jumbo Seedless(500g & 2kg))","119")
let t= new cart("https://cdn.shopify.com/s/files/1/0449/5225/6667/products/bd07b8e7-3643-4a98-996e-c85fd7d133a8_360x.png?v=1614765886","Kimaye Green & Black Grapes  (Flames Seedless(500g & 2kg))","159")
let u= new cart("https://cdn.shopify.com/s/files/1/0449/5225/6667/products/bd07b8e7-3643-4a98-996e-c85fd7d133a8_360x.png?v=1614765886","Kimaye","789")
let v= new cart("https://cdn.shopify.com/s/files/1/0449/5225/6667/products/CopyofGuava_Main_Clean_360x.png?v=1606828311","Kimaye","1239")
let w= new cart("https://cdn.shopify.com/s/files/1/0449/5225/6667/products/1_3311b3de-1a38-4175-8e8c-ac9577ec85df-min_360x.jpg?v=1614324760","Kimaye Three Combo Grapes","159")
let x= new cart("https://cdn.shopify.com/s/files/1/0449/5225/6667/products/221f2788-1a08-45ae-bdaf-7432d7ea0156_360x.png?v=1614326590","KImaye","129")
let y= new cart("https://cdn.shopify.com/s/files/1/0449/5225/6667/products/1_6875ada8-f1e6-4589-b1fd-6f13a86b8ddb-min_360x.jpg?v=1614326164","Kimaye BlueBerries Green","359")
let z= new cart("https://cdn.shopify.com/s/files/1/0449/5225/6667/products/62cef687-de59-4f5a-acf3-4df1238c3e29-min_360x.png?v=1614324446","Kimaye GrapesFruit (Pack of 2 to 4 pcs)","349")
let aa= new cart("https://cdn.shopify.com/s/files/1/0449/5225/6667/products/CopyofMosambi_Main_FixedShadows-min_360x.png?v=1614327057","Kimaye","2569")
let ab= new cart("https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Papaya-cover_360x.jpg?v=1638875170","Kimaye","129")
let ac= new cart("https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Yelakki-banana-cover_bc79dea2-08f8-404b-99f5-327a91213fbb_360x.jpg?v=1627026370","Kimaye Dragon Fruit (1 pc)","169")
let ad= new cart("https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Muskmelon-cover_360x.jpg?v=1633763200","Kimaye","129")
let ae= new cart("https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Picture3_3cf8f5aa-4155-4a94-9768-9819bb41835f_360x.jpg?v=1641381097","Kimaye Sun Melon (1 pcs)","469")
let af= new cart("https://cdn.shopify.com/s/files/1/0449/5225/6667/products/2I8A7821_360x.jpg?v=1631350656","Kimaye","429")





let All_Frutis = [];
All_Frutis.push(a,b,c,d,e,f,g,h,j,i,j,k,l,m,n,o,p,r,s,t,u,v,w,x,y,z,aa,ab,ac,ad,ae,af)
console.log(All_Frutis)

All_Frutis.forEach((elem) => {

 
    let Product = document.getElementById("Product_Divs")

            let div = document.createElement("div")
              div.setAttribute("id","divss")
       
    let  img = document.createElement("img")
       img.setAttribute("id","img")
       img.setAttribute("src",elem.img)


       let name = document.createElement("h2")
         name.innerText=elem.name;
         name.setAttribute("id","name")


         let Inner_Div = document.createElement("div")
         Inner_Div.setAttribute("id","Inner_Div")


         
        let btn = document.createElement("button")
        btn.innerText="Add To Cart";
        btn.setAttribute("id","btn")
        btn.addEventListener("click",function(){

            save_elem(elem)
        })

         let price = document.createElement("h4")
         price.innerText=elem.price;
         price.setAttribute("id","price")
         
         
         Inner_Div.append(price,btn)


         div.append(img,name,Inner_Div)
         Product.append(div)

       
      
  });
  function save_elem(elem)
  {
      let arr=  JSON.parse(localStorage.getItem("save")) || [];
      arr.push(elem)
      localStorage.setItem("save",JSON.stringify(arr))
   alert("Item Added To Cart")
  window.location.href="Cart_Item.html"
  }

