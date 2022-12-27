export function initialise(noir_resolver) {
    if (typeof noir_resolver === "function") {
        return noir_resolver;
    }
    else {
        throw new Error("Provided Noir Resolver is not a function, hint: use function(module_id) => NoirSource as second parameter");
    }
}
//# sourceMappingURL=initializer.js.map