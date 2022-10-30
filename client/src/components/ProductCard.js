export default function ProductCard(product) {
  const {
    id,
    title,
    description,
    category,
    price,
    images,
    // tags,
    // reviews,
    // compare_at_price,
  } = product;
  const image = images[0];
  return `
    <div id='product-row-${id}'>
      <div class='card d-flex flex-row border-0' >
        <img src=${image} class='card-img-top ' alt='...' style="width:250px"/>
        <div class='card-body '>
          <h4 class='card-title'>${title}</h4>
          <h3 class='card-text '>
          $${price}</h3>
          <p class='card-text card-des'><b>Description:</b> <br/>  ${description}</p>
          <p class='card-text card-cat'> <b>Category:</b> <br/> ${category}</p>
        </div>
      </div>
    </div>`;
}
