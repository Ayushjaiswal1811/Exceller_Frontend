function Card({users,heading}){

const RenderCard=()=>{
  
  return <>
  <div className="card">
  <h1>{heading || ''}</h1></div>
    {users.map((user , index) =>(
          <div key={index} className="card">
            <div className="details">
              
              <h1 > {user.details.id} {user.details.name} </h1>
              <p> {user.details.age}</p>
            
            </div>
            
            <div className="contact">
              <div className="email">
                <a href="mailto:">{user.contacts.email}</a>
              </div>
              <div className="phone">
                <a href="tel:+">{user.contacts.number}</a>
              </div>
            </div>
          <div className="address">
          {user.address.city}  {user.address.state} {user.address.zipcode}
          </div>
      </div>

    ))}</>
}

  return (
    <RenderCard />
  )
}

export { Card};