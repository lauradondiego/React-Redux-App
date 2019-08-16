import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import catfacts from "../images/catfacts.jpg";

const CatFacts = props => {
  return (
    <Card>
      <Image src={catfacts} wrapped ui={false} width={70} />
      <Card.Content>
        <Card.Meta>
          <p className="type">Species: {props.cat.type}</p>
        </Card.Meta>
        <Card.Description>Amazing Cat Fact: {props.cat.text}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          Upvotes: {props.cat.upvotes}
        </a>
      </Card.Content>
    </Card>
  );
};

/* <div>
        <h4>Fact: {props.cat.text}</h4>
        <p>Animal Type: {props.cat.type}</p>
        <p>Amount of Votes: {props.cat.upvotes}</p>
      </div> */

export default CatFacts;
