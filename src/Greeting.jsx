export function Greeting({title, name = 'Fuckiu!'}){  //Put the name upercase for use JSX
    console.log(title, name)
    return <h1>{[title, name]}</h1> 
}

export function UserCard({name,amount,married,address,point, greet}){//pasamos las propiedades props
    console.log(name, greet)
    return <div>
        <h1>{name}</h1>
        <p>${amount} 💵</p>
        <p>{married ? 'Married':'Single'}</p>
        <ul>
            <li>City: {address.city}</li>
            <li>Address: {address.street}</li>
        </ul>
        <p>{point}</p>
        
    </div>
}