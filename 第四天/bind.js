//什么叫函数柯里化  预制参数
function say(name){
    return function (str) {
        console.log(name,str);
    }
}
var newSay = say('zfpx')
newSay('I love you');
newSay('I hate you');
function say1(){
    console.log(['zfpx'].concat(Array.prototype.slice.call(arguments)));
}
say1('I love you');
say1('I hate you');
function eat(time,callback){
    return function () {
        if(--time==0){
            callback();
        }
    } 
}
var e = eat(3,function () {
    console.log('吃完了');
});
e();
e();


