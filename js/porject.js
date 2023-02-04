// name  = moaz

// localStorage.setItem('name',"moaz")


// console.log(localStorage.getItem('moaz'));

function print(id){

    let title =document.getElementById('title' + id).innerText;
    let desc =document.getElementById('desc' + id).innerText;
    let price = document.getElementById('price' + id).innerText;
    let image = document.getElementById('image' + id).src;

       let object ={
        'title' : title,
        'desc' : desc,
        'price' : price,
        'image' : image,
       }
       


  localStorage.setItem('product' + id , JSON.stringify(object) );

    console.log(localStorage);
     

    // let date = localStorage.getItem('product1')
    // console.log(date.title);
    // let date2 = JSON.parse(date)
    // console.log(date2);   

// console.log(image);  
  // console.log(price);
    // console.log(desc);
    // console.log(title);


}