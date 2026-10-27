

const callbackfn = (arg) => {
  console.log(arg);
  
}

const loadScript = (src, callbackfn) => {
  let sc = document.createElement("script");
  sc.src = src;
  sc.onload = callbackfn("harry")
}