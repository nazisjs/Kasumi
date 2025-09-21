function search(){
    let filter=document.getElementById('find').value.toUpperCase();
    let item = document.querySelectorAll('.container');
    let l = document.getElementsByTagName('strong');

    for(var i=0;i<=l.length;i++){ 
        let a=item[i].getElementsByTagName('strong')[0]; // searching by name
        let value = a.innerHTML || a.innerText || a.textContent;
        if(value.toUpperCase().indexOf(filter) > -1){ 
            item[i].style.display="";
        }
        else{
            item[i].style.display="none";
        }
    }
}