export function profile(target:any, methodName:string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]) {
        const timeStart = performance.now();
        const result = originalMethod.apply(this, args);
        const endTime = performance.now();
        console.log(methodName, ": ", args , (endTime - timeStart) + "ms");
        return result; 
    }
}