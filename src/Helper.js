function sum(arr){
    return arr.reduce((sum,val)=>{
        return sum+val
    });
}

function genArray(n)
{
    let array=new Array(n)
    for(let i=0;i<n;i++)
    {
        array[i]=Math.floor(Math.random()*10);
    }
    return array;
}

export {sum,genArray};