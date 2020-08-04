

function addJs(path){
    const script = document.createElement("script");
    script.src = path;
    script.async = false;
    document.body.appendChild(script);
}

export default addJs

