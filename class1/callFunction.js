function call(name, sam){
    console.log(`${name}`);
    sam()
}
call('hello', function(){
    console.log('world');
})