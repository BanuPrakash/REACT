export default function Min(limit: number) { // factory
    return function (target: any, propertyKey: string) {
        let x: number;
        // u.name = "Raj"
        const setter = function (newVal: number) {
            if (newVal < limit) {
                // if (!target["error"])
                    Object.defineProperty(target, "error", {
                        value: propertyKey + " should be minimum of " + limit + " you entered " + newVal,
                        writable: true,
                        configurable: true
                    })
            } else {
                x = newVal;
            }
        }

        // n = u.name
        const getter = function () {
            return x;
        }

        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter
        })
    }
} 