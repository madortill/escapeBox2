function searchName(){
    var input=document.getElementById("name");
    var filter=input.value.toUpperCase();
    var table=document.getElementById("userdata")
    var tr=table.getElementsByTagName("tr");
    var td;
    for(var i=1; i<tr.length;i++){
        td=tr[i].getElementsByTagName("td")[1];
        if(td.innerHTML.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display="";
        }
        else{
            tr[i].style.display="none";
        }
    }   
}
function searchLast(){
    var input=document.getElementById("last");
    var filter=input.value.toUpperCase();
    var table=document.getElementById("userdata")
    var tr=table.getElementsByTagName("tr");
    var td;
    for(var i=1; i<tr.length;i++){
        td=tr[i].getElementsByTagName("td")[2];
        if(td.innerHTML.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display="";
        }
        else{
            tr[i].style.display="none";
        }
    }   
}
function searchBattalion(){
    var input=document.getElementById("battalion");
    var filter=input.value.toUpperCase();
    var table=document.getElementById("userdata")
    var tr=table.getElementsByTagName("tr");
    var td;
    for(var i=1; i<tr.length;i++){
        td=tr[i].getElementsByTagName("td")[6];
        if(td.innerHTML.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display="";
        }
        else{
            tr[i].style.display="none";
        }
    }   
}
function searchID(){
    var input=document.getElementById("id");
    var filter=input.value.toUpperCase();
    var table=document.getElementById("userdata")
    var tr=table.getElementsByTagName("tr");
    var td;
    for(var i=1; i<tr.length;i++){
        td=tr[i].getElementsByTagName("td")[3];
        if(td.innerHTML.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display="";
        }
        else{
            tr[i].style.display="none";
        }
    }   
}

    var x=document.getElementsByClassName("select");
    console.log(x);


    
    
