import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';
import { BiSearchAlt2 } from 'react-icons/bi';

const Search = ({ searchProducts }) => {

  const [query, setQuery] = useState()

  const handleSubmit = e => {
    e.preventDefault();
    console.log(`Query:${query}`)
    searchProducts(query)

  };

  return (


    <Form onSubmit={handleSubmit}>
      <Row>
        <Col xs={8} >
          <Form.Control size="sm" type='search' placeholder="Search.." name="search" value={query} onChange={e => setQuery(e.target.value)} />
        </Col>
        <Col style={{ paddingLeft: "0px" }}>
          <Button size="sm" variant="secondary" type="submit"><BiSearchAlt2 /></Button>
        </Col>
      </Row>
    </Form >
  )
}

export default Search