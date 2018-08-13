var myurl="http://192.168.0.109:8080/test/";
var user_status=0;

apiready = function(){

}

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
