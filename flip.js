let searching = document.getElementById('search');
let search_box = document.getElementById('search-box').value ;
searching.addEventListener('click',function(){
let search_box = document.getElementById('search-box').value ;
    if(search_box == ""){
        document.getElementById('search-box').style.border = '1px solid red';
        alert('please fill the search box');
    }
    else if(search_box != ""){
        document.getElementById('search-box').style.border = '1px solid white';
        alert('This Things is Not Available');
    }
    
});

function buy_product(){
    window.location.href='./sproductelec.html';
}