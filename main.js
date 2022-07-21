var itemList=document.getElementById('items');
itemList.addEventListener('click',removeItem);
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm("Are you sure?")){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}