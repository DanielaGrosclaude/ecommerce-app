import React, { useState } from "react";
import { Button, FormControl, Form } from 'react-bootstrap';

const FormItem = () => {
    return (
<Form className="d-flex">
<FormControl
  type="search"
  placeholder="Buscar..."
  className="me-2"
  aria-label="Search"
/>
<Button variant="outline-success">Buscar</Button>
</Form>)}


export default FormItem