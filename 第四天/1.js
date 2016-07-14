function tea(){
    console.log('黑茶');
}
function sweatTea(){
    tea();
    console.log('加糖');
}
function milkSweatTea(){
    sweatTea();
    console.log('加奶');
}
sweatTea();