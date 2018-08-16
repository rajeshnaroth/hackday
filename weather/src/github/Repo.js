import React from 'react';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText
} from 'reactstrap';

const Repo = props => {
  return (
    <Card>
      <CardImg
        top
        width="100%"
        src={props.repo.thumbnail}
        alt="Card image cap"
      />
      <CardBody>
        <CardTitle>{props.repo.name}</CardTitle>
        <CardSubtitle>By {props.repo.owner}</CardSubtitle>
        <CardText>{props.repo.description}</CardText>
      </CardBody>
    </Card>
  );
};

export default Repo;
