// INJECTOR
export var Injector = {
    dependencies: {},
    add: function (qualifier, obj) {
        this.dependencies[qualifier] = obj;
    },
    get: function (func) {
        if (typeof func !== 'function') {
            throw new Error('Invalid argument: expected a function');
        }

        var obj = Object.create(func.prototype);
        var dependencies = this.resolveDependencies(func);

        func.apply(obj, dependencies);

        return obj;
    },
    resolveDependencies: function (func) {
        var args = this.getArguments(func);
        var dependencies = [];

        for (var i = 0; i < args.length; i++) {
            var dependency = this.dependencies[args[i]];

            if (dependency === undefined) {
                throw new Error('Dependency not found: ' + args[i]);
            }

            dependencies.push(dependency);
        }

        return dependencies;
    },
    getArguments: function (func) {
        var FN_ARGS = /^function\s*[^\(]*\(\s*([^\)]*)\)/m;
        var match = func.toString().match(FN_ARGS);

        if (!match) {
            throw new Error('Unable to extract function arguments');
        }

        var args = match[1].split(',').map(arg => arg.trim());
        return args;
    }
};
