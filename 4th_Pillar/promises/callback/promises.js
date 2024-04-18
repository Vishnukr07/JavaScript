// using callback

function download(url, cb)
{
    console.log("Downlaoding starts from" , url);

    setTimeout(function exec(){
        console.log("Completed Downloading");

        const content = "ABCDEF";
        cb(content);
    } , 5000);
}

download("www.xyz.com" , function processDownload(value)
{
    console.log("Downloaded data" , value);
})
// in this we are giving control of our callback to others may be that function retrun ans many tines as we wanted 
// wnated only one times so this is a inversion of control.

// this problem can be solve by promise

// in this way we can control inversion of control
function download(url)
{
    console.log("Starting Downloading" , url);
    return new Promise( function exec(res , rej){
        setTimeout(function ex(){
            console.log("Completed Downlaod");
            const content = "ABCDED";
            res(content);
        } , 500) 
    })
}

let p = download("www.xyz.com");

p.then(function fulfillhandler(value)
{
    console.log("Content is downloaded" , value);
})


