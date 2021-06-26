
export default function Errormessage({children}){
  
return(
<>
<div
style={{
width:"100%",
padding:10,
marginTop:10,
marginBottom:10,
borderRadius: 4,
backgroundColor:"red",
textAlign:"center",
textTransform:"capitalize",
color:"white"
}}
>
{children}
  </div>
</>

)

}