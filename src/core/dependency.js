import dependencyResolver from "./dependency-resolver";

export class Dependency {
    constructor(depenencies) {
        dependencyResolver.resolveDependencies(this, depenencies);
    }
}