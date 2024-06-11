function unknownExample(cb:unknown) {
    if(typeof cb === 'function') {
        cb();
    } else if(typeof cb === 'string') {
        console.log(cb.toUpperCase());
    }
}

unknownExample("Hello World!!!");