function logger (msg ){
    var name = msg.name;
    var names = Object.getOwnPropertyNames(msg);
    var data = dataArray(names);
    //return createString(isfile(msg.name+".csv"),data);
    //return isfile("tsyt.csv",data);
    msg1.filename = "C:\\Users\\SmartHome\\Desktop\\Node-log\\"+name+".csv";
    msg2.filename = "C:\\Users\\SmartHome\\Desktop\\Node-log\\"+name+".csv";
    if (isfile(name+".csv") === true){
            return createString("value", data);
    }
    else if (isfile(name+".csv") === false){
                msg2.payload = createString("name", data);
                    node.send(msg2);
                    node.done();
            return createString("value", data);
    }

    
    
    
    
    
    
    
  //  var out = {
    //  filename: data.filename = 'C:\\Users\\SmartHome\\Desktop\\Node-log\\' + msg.name+".csv",
       // String: ???
    
    
 
    
}
/*var logger = {
  filename: msg.filename = 'C:\\Users\\SmartHome\\Desktop\\Node-log\\',
  names: Object.getOwnPropertyNames(??????),
  value: msg.payload
};*/
msg1 = {};
msg2={};
msg1.payload=logger(msg);
return msg1;

function dataArray (obj){
        var newl = [];
        for (var x in obj){
            if (obj[x]== "_msgid"|| obj[x] == "topic" || obj[x]== "payload" || obj[x]=="name" || obj[x]=="_event"){} 
            else{
                
            obj[x] ={
                name: obj[x],
                value: msg[obj[x]]
            };
            newl.push(obj[x]);
        } 
    }
   //flow.set([name],[newl]);
      return newl; }
function createString(valueOrname, array){
    ///flow.set("tst", array);
    if (valueOrname == "name"){
        var nameList=[];
        for (var i in array){
            var t = array[i].name;
            nameList.push(t);
        }
        //flow.set("namelist", [nameList]);
        return nameList.join();
    }
    else if (valueOrname == "value"){
        var valueList=[];
        for (var z in array){
            var a = array[z].value;
            valueList.push(a);
        }
        //flow.set("valuelist", [valueList]);
        return valueList.join();
    }
    

    
}
function isfile(name , data){
    var list = flow.get('filelist');
    var newlist = [];
    for (var i in list){
        if (name == list[i].filename){
            flow.set('filelist['+i+'].counter', +1);
               return true;
            }
        flow.set('filelist['+i+'].counter', 1);
    }
    
    return false;
}
