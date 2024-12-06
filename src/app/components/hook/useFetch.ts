export default function useFetch(url:string, setData:(data:any)=>void):void
{
    fetch(url)
        .then(res => res.json())
        .then(data => setData(data));
}