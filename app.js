let cel = document.getElementById('cel');
let fah = document.getElementById('fah');


cel.addEventListener('input', function(){
    // console.log("cel Changed");
    let c = this.value;
    let f = (c * 9/5) + 32;
    //decimal to 2 digit show only
    if(!Number.isInteger(f)){
        f = f.toFixed(2);
    }
    fah.value = f;



});

fah.addEventListener('input', function(){
    // console.log("fah Changed");
    let f = this.value;
    let c = (f - 32)* 5/9;
   //decimal to 2 digit show only
    if(!Number.isInteger(c)){
        c=c.toFixed(2);
    }
    cel.value = c;
});

