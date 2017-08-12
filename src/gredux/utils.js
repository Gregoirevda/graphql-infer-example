export const makeProxy = obj => new Proxy(obj, {
  get(target, name) {
    //If property does not exist on object
    console.log('proxy', name);
    if(!target.name) {
      target[name] = name.toString();
    }
    return target[name];
  }
});