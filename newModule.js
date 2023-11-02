function doSomething(){
    console.log("**** do something is called ****");
}



function againdoSomething (){
    console.log("**** Again do something ****");

}

let arr=[];
function createArr(element){
    arr.push(element);
    return arr;
}
function readArr(){
    return arr;
    
}

function updateArr(pos,element)
{
    arr[pos]=element;
    return arr;
}
function deleteArr(pos)

{
arr.splice(pos,1)
//delete 1 value from the given possition
return arr;
}

module.exports = {doSomething,againdoSomething,createArr,readArr,updateArr,deleteArr}