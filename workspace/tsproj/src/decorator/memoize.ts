export default function memoize() { // decorator factory
    const cache: Map<string, any> = new Map(); // closure --> Heap area
    // return a decorator
    return function (target: any, methodName: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        // redefine defintion
        descriptor.value = function (...args: any[]) {
            const cacheKey = `${methodName}:${args.join(',')}`
            if (cache.has(cacheKey)) {
                return cache.get(cacheKey);
            }
            const result = originalMethod.apply(this, args); // use call / apply to invoke a method
            cache.set(cacheKey, result);
            // console.log(cache)
            return result;
        }
    }
}


// fibanocci:34