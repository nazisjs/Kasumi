const imgdiv = document.querySelector('.user-img');
const img = document.querySelector('#photo');
const file = document.querySelector('#file');
const upload = document.querySelector('#uploadbtn');

file.addEventListener('change',function(){
    const chosenfile = this.files[0];
    if(chosenfile){
        const reader = new FileReader(); // changing into new profile picture
        reader.addEventListener('load',function(){
            img.setAttribute('src',reader.result);
        })
        reader.readAsDataURL(chosenfile);
    }
})