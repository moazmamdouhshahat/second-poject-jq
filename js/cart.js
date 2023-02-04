


// console.log(localStorage.getItem('name'));

let allproduct = document.getElementById('allproduct')

let noproduct = document.getElementById('noproduct')

// console.log(localStorage);
// localStorage.clear();

for ( let i=0 ; i < localStorage.length; i++){
    let product = localStorage.getItem (localStorage.key(i))
    // console.log(product);
    let data = JSON.parse(product);
    // console.log(data);
    allproduct.innerHTML += `
    <div class="container">
    <div class="card my-3">
        <div class="row no-gutters">
          <div class="col-md-3">
            <img src="${ data.image}" class="img-fluid" alt="...">
          </div>
          <div class="col-md-7">
            <div class="card-body">
              <h5 class="card-title">${data.title}</h5>
              <p class="card-text">${data.desc}</p>
              <p>${data.price}</p>
            </div>
          </div>
          <div class="col-md-2 text-center pt-5">
            <i class="fa-solid fa-trash-can delete ${data.title} "></i>
          </div>
        </div>
      </div>
    
    </div>
    
    `
};




//  no itame

if(allproduct.childElementCount > 0){
    noproduct .style.display = 'none'
}
else{
    noproduct .style.display = 'block'
}


//  delet

document.addEventListener( 'click' ,(e)=> {
    if( e.target.classList.contains('delete') ){
        
      console.log(e.target.classList);
        let productname=e.target.classList[3]
        // console.log('productname');
        localStorage.removeItem(productname)
        window.location.reload()
        // console.log(e.target.classlist);
    }
})