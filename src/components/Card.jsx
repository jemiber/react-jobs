
const Card = ({ children, bg='bg-gray-100' }) => {
  return (
    <div className={`${bg} p-6 rounded-lg shadow-md`}>
        { children }
    </div>
  )
}

export default Card

/*
This card component takes in children as a prop
and that's what we use for whatever we wrap,
so if we pass like an H1 into the car component,
we wrap the h1 in a card, then children would be that 
h1
*/