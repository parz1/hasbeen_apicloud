var myurl="http://192.168.0.100:8080/test/";

apiready = function(){

}
var myNotes

function openMyWin(name,add){
  api.openWin({
    name:name,
    url:add,
    animation:{
      type:"movein",
      subType:"from_right",
      duration:300
    }
  });
}

function closeMyWin(){
  api.closeWin({
    animation:{
      type:"push",
      subType:"from_left",
      duration:"300"
    }
  });
}
