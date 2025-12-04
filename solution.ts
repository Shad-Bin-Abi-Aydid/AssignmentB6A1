// Problem-1
type ReturnValue = string | number | boolean;

const formatValue =<T> (value:T) : ReturnValue =>{
    if(typeof value === 'string'){
        return value.toLocaleUpperCase();
    }
    else if(typeof value === 'number'){
        return value*10;
    }
    else if(typeof value === 'boolean'){
        return !value;
    }
    return '';

}


// Problem 2