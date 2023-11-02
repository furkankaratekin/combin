import React from 'react'
import { Link } from 'react-router-dom'
import data from './data'

const NewsList = () => {
  const productItems = data.map((store) => {
    const { id, title, description, image } = store;
    return (
      <div key={id} className="card">
        <Link to={`/news/${id}`}>
          <img src={image} alt=""></img>
          <h3>{title}</h3>
        </Link>
        <p>{description.slice(0, 50)}</p>
      </div>
    );
  });
  return (
    <>
      <section className="card-section">{productItems}</section>
    </>
  );
}

export default NewsList
