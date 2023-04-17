async function getData(){
    let res=await fetch('https://jsonplaceholder.typicode.com/posts');//json placeholder link fetch
    let data = await res.json();
    console.log(data);
}
getData();