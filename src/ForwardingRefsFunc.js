import React from 'react'

// function ForwardingRefsFunc() {
//   return (
//     <div>
//         <input type="text"/>
//     </div>
//   )
// }
const ForwardingRefsFunc=React.forwardRef((props,ref)=>{
    return(
        <div>
      <input type="text" ref={ref}/>

        </div>
    )
})


export default ForwardingRefsFunc