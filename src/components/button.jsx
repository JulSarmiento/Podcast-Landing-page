
const Button = ( props ) => {

  const { name } = props

  return (
    <>
      <button className="bg-purple px-5 py-2 text-light-gray">{name}</button>
    </>
  )
};


export default Button;

