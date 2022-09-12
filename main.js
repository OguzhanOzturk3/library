let myLibrary = [];



function Book(title,author,pages,read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}


function addBookLibary(title,author,pages,read){

  let book1 = new Book(title,author,pages,read);
  myLibrary.push(book1);


  displayBook();
}





function displayBook(){

  const books = document.querySelector(".books");

  const removeDivs = document.querySelectorAll(".card")
  for(let i = 0;i<removeDivs.length;i++){
    removeDivs[i].remove();
  }

  
  var a = 0;
  myLibrary.forEach(myLibrarys=>{
    

    const card = document.createElement("div");
    card.classList.add("card");
    books.appendChild(card)
    for(let key in myLibrarys){
      console.log(`${key}: ${myLibrarys[key]}`);
      const para = document.createElement("p");

      para.textContent =(`${key}= ${myLibrarys[key]}`)
     
      card.appendChild(para);


    }
    const remove_btn = document.createElement("button");
    const status_btn = document.createElement("button");

    remove_btn.value = (`${a}`);
    status_btn.value = (`${a}`);

    remove_btn.classList.add("remove-button")
    status_btn.classList.add("status-button")

    remove_btn.textContent = "Remove Book:"+(`${a}`);
    status_btn.textContent = ("Change Status");

    card.appendChild(remove_btn);
    card.appendChild(status_btn);
    a++;




  })

  const remove_book = document.querySelectorAll(".remove-button");
  const status_book = document.querySelectorAll(".status-button");



  status_book.forEach(button => {
 
    button.addEventListener('click', function(index){
  
      
      
  
        if(myLibrary[button.value].read=="no"){
          myLibrary[button.value].read="yes"
        }
        else {
          myLibrary[button.value].read="no";
        }
        
      
        displayBook();
  
  
  
   
  
    });
  });




  remove_book.forEach(button => {
 
    button.addEventListener('click', function(index){
  
      
      
  
        console.log("*********");
        console.log(button.value);

        if(button.value)
        myLibrary.splice(button.value,1);
      
        displayBook();
  
  
  
   
  
    });
  });

}












const add_button= document.querySelector(".add-book-button")

add_button.addEventListener("click",display_form);

function display_form(){
  document.getElementById("add-book-form").style.display ="";
}

const submit_btn = document.querySelector(".submit-button");
submit_btn.addEventListener("click",add_form);

function add_form(){

  const title = document.getElementById("Title").value;
  const author = document.getElementById("Author").value;
  const pages = document.getElementById("Pages").value;
  const read = document.getElementById("Read").value;

  addBookLibary(title,author,pages,read);
  document.getElementById("add-book").reset();
}


const reset_btn = document.querySelector(".reset-button");
reset_btn.addEventListener("click",reset_form);

function reset_form(){
  document.getElementById("add-book").reset();
}
