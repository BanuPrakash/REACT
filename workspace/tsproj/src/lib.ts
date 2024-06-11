// HOF --> OCP
export default function filter<T>(data:T[], predicate: (elem:T) => boolean): T[] {
    let result:T[] = [];
    data.forEach(elem => {
       if(predicate(elem)) {
           result.push(elem);
       }
    })
    return result;
}

// complete this task
export  function map() {

}