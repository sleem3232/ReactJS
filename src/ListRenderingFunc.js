import React from 'react'

function ListRenderingFunc() {
    const persons=[
        {id:1,name:'salim',age:25,skill:'react'},
        {id:2,name:'bob',age:34,skill:'c#'},
        {id:3,name:'alice',age:45,skill:'css'},]
    // const names=['salim' , 'bob' , 'alice']
    // const namelist=names.map(name=><h2>{name}</h2>)
    //you have to add key when you do map
    const personsList=persons.map(person=>  <h2 person >  {person.id}  my name is {person.name} and my age is {person.age} and i have skill {person.skill}</h2>)
  
  return (
      <div>
          {personsList}
      </div>
  )
}

export default ListRenderingFunc