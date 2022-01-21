import React from "react";
import { Card, Button } from "react-bootstrap";
function UserCard({user}) {
  return (
    <div  >
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://png.pngtree.com/png-vector/20191101/ourlarge/pngtree-male-avatar-simple-cartoon-design-png-image_1934458.jpg"
        />
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>
          {user.email}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default UserCard;
