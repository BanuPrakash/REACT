function invokeAny(cb:any) {
    cb(); // invoke string --> error
}

invokeAny("Hello World!!!");