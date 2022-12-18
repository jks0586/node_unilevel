import React from 'react'

const ProducSlug = () => {
const products = getProduct();
  return (
    <div>
    <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridGap: '4em' }}>
    {avatars.map(products => {
      return (
        <li key={products._id}>
          <p>{ products.name }</p>
          <a>
          <img
            src="/images/pigion.webp"
            className="rounded"
            width={100}
            height={100}
          />
        </a>
        </li>
      )
    })}
  </ul>
    </div>
  )
}

export default ProducSlug
