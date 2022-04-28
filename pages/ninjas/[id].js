import React from 'react'
// fetch all of the data so we can get all the ids, to generate all the routes and pages
export const getStaticPaths= async ()=>{
  // get all the resources
 const res= await fetch('https://jsonplaceholder.typicode.com/users')
 const data= await res.json()
  // get all the paths
  const paths = data.map(user=>{
    return {
      params:{id:user.id.toString()}
    }
  });
  // data
  return{
    paths,
    fallback:false
  }
  
}

// next will run this fucntion for every detail page based on the paths
export const getStaticProps = async (context)=>{
const id = context.params.id;
const res=await fetch('https://jsonplaceholder.typicode.com/users/'+id)
 const data = await res.json()

 return{
   props:{ninja:data}
 }
}



// temlplate
const Details = ({ninja}) => {
  return (
    <div>
        <h1>{ninja.name} | {ninja.username}</h1>
        <p>{ninja.name}</p>
        <p>{ninja.website}</p>
        <p>{ninja.address.city}</p>
    </div>
  )
}

export default Details