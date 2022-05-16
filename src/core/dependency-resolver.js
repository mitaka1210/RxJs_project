class DependencyResolver {
    _container = {

    };

    resolveDependencies(dependency, injects, chained) {
        for (let i = 0; i < injects.length; i++) {
            let inject = injects[i];
            if (!dependency[inject]) {
                if(!chained) {
                    dependency[inject] = this._container[inject];
                } else {
                    dependency.prototype[inject] = this._container[inject];
                }

            } else {
                throw Error('Already registered dependency!');
            }
        }    
    }

    register(name, instance) {
        if (!this._container[name]) {
            this._container[name] = new instance();
            return this._container[name];
        }
    }
}
const dependencyResolver = new DependencyResolver();
export default dependencyResolver;