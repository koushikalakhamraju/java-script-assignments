function CreateObject(arr) {
    // Write your code here
    var obj={}
    for(i=0;i<parseInt(arr.length/2);i++){
        var key1=arr[i*2];
        var value1=arr[2*(i)+1]
        obj[key1]=value1;
    }
    return obj
}

module.exports = CreateObject;
