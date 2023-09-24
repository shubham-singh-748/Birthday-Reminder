import React from 'react'

const List = ({ People }) => {
    return (
        <div>
            {People.map((person) => {
                const { id, name, age, image } = person
                return <article key={id} className='person'>
                    <img src={person.image} alt={name} />
                    <div>
                        <h4>{name}</h4>
                        <p>{age}</p>
                    </div>
                </article>
            })}
        </div>
    )
}

export default List