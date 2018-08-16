import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const GithubForm = props => {
  function isEnterKey(e) {
    return e.key === 'Enter';
  }
  return (
    <Form inline>
      <FormGroup inline>
        <Label for="search">Search</Label>
        <Input
          width="18"
          type="text"
          value={props.search}
          onChange={props.updateSearch}
          onKeyPress={e => {
            if (isEnterKey(e)) props.reloadData();
            return false;
          }}
        />
        <Button color="danger" onClick={props.reloadData}>
          OK!
        </Button>
      </FormGroup>
    </Form>
  );
};

export default GithubForm;
