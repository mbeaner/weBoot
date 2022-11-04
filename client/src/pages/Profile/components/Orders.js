import { Card } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { DateTime } from "luxon";

const Orders = ({ orders }) => {
  const [orderData, setOrderData] = useState([]);
  useEffect(() => {
    if (orders) {
      setOrderData(orders);
    }
    console.log("orders", orders);
  }, [orders]);
  return (
    <>
      <h2 id="order-title">Order History</h2>
      {orderData.map((order) => (
        <Card key={order._id} className="my-3 mx-4 p-3 rounded order-card">
          <Card.Header as="h5">
            {DateTime.fromMillis(Number(order.purchaseDate)).toLocaleString(
              DateTime.DATETIME_MED
            )}
          </Card.Header>
          <Card.Body>
            <Card.Title>
              Order Total: $
              {order.products
                .reduce((acc, item) => acc + item.price, 0)
                .toFixed(2)}
            </Card.Title>
            <Card.Text>
              {order.products.map((product) => (
                <div key={product._id}>
                  <p>
                    {product.title} - ${product.price}
                  </p>
                </div>
              ))}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default Orders;
