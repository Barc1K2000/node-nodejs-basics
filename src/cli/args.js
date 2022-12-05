const parseArgs = () => {
    let args = process.argv.splice(2, process.argv.length - 2).reduce((str,item,index,arr)=>{
        if(index&1) return str + " is " + item + (index+1!=arr.length?", ":"")
        return str+item
    }, "")
    console.log(args)
};
parseArgs();