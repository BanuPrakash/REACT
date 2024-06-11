interface Product {
    getName(): string;
}

interface ErrorMsg {
    getError(): string;
}

// function printData(data: Product | ErrorMsg) {
//     if(typeof (data as Product).getName === 'function') {
//         (data as Product).getName();
//     }
//     if(typeof (data as ErrorMsg).getError === 'function') {
//         (data as ErrorMsg).getError();
//     }
// }

// type assertion functions
function isProduct(data: Product | ErrorMsg) : data is Product {
    return typeof (data as Product).getName === 'function';
}

function isError(data: Product | ErrorMsg) : boolean {
    return typeof (data as ErrorMsg).getError === 'function' 
}


function printData(data: Product | ErrorMsg) {
    if(isProduct(data)) {
        data.getName(); // already typecasted because of "is"
    }
    if(isError(data)) {
        (data as ErrorMsg).getError();
    }
}
printData({getError:() => "Boom :-("});