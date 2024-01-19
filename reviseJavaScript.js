const multiplication=(a,b)=>{
 console.log(a*b)
}

let obj={
    name:"som",
    age:20,
    greet:function(){
        console.log("Hello",this.name)
    }
  
}

multiplication(2,3)
obj.greet();