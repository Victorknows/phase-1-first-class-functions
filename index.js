function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(){
    return function namedFunction(){
        return namedFunction();
    }
}

function returnsAnAnonymousFunction(){
    return ()=> anonymous
}
