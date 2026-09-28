const Card = ({ children, bg = 'bg-gray-100' }) => {
  return (
    <div className={`${bg} p-6 rounded-lg shadow-md transition-shadow duration-200`}>
      {children}
    </div>
  ) 
}

export default Card