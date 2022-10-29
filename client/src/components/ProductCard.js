export default function ProductCard(product) {
  const { id, name, description, category, price, vendor, image } = product;
  return `
    <div id='product-${id}'>
      <div class='card d-flex flex-row border-0' >
      <img src=${image} class='card-img-top ' alt='...' style="width:250px"/>
        <div class='card-body '>
          <h4 class='card-title'>${name}</h4>
          <h3 class='card-text '>
          $${price}</h3>
          <p class='card-text card-des'><b>Description:</b> <br/>  ${description}</p>
          <p class='card-text card-cat'> <b>Category:</b> <br/> ${category}</p>
      </div>
      </div>
    </div>`;
}
