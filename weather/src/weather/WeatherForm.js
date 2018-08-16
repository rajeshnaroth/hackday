import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const WeatherForm = props => {
  return (
    <Form inline>
      <FormGroup inline>
        <Label for="zipcode">Email</Label>
        <Input
          width="8"
          type="text"
          value={props.zipcode}
          onChange={props.updateZipcode}
        />
        <Button color="danger" onClick={props.reloadData}>
          OK!
        </Button>
      </FormGroup>
    </Form>
  );
};

export default WeatherForm;
