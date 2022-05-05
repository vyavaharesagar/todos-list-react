import React from 'react'

export const Footer = () => {
  let footerStyle = {
    position:"absolute",
    top: "100",
    width:"100%"
  }
  return (
    

    <footer className='bg-dark text-light my-3 pt-2' style={footerStyle} ><p className='text-center' >Copyright &copy; MyTodosList.com</p></footer>
    
  )
}
