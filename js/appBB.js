const consumirAPI=async()=>{
const response=await fetch(`https://api.breakingbadquotes.xyz/v1/quotes`);
const json=await response.json();
document.getElementById('frase').innerHTML=`
<p><h>${json[0].quote}</h></p>  <small>${json[0].author}</small>
`;
}