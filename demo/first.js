function tester(){
    var msg;
    if(confirm("Press a button")){
        msg = "You pressed OK";
    }
    else{
        msg = "You pressed Cancel";
    }
    console.log(msg);
}
tester();