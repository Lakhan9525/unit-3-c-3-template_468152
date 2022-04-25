// Store the wallet amount to your local storage with key "amount"
let arr=JSON.parse(localStorage.getItem("amount"))||[]
add=()=>{
    let amount=document.querySelector("#amount").value;
    //console.log(amount);
    arr.push(amount);
    localStorage.setItem("amount",JSON.stringify(arr));
    var total=0;
    for(var i=0; i<arr.length; i++){
        total+=+arr[i];
    }
    console.log(total)
    document.querySelector("#wallet").append(total);
    

}

