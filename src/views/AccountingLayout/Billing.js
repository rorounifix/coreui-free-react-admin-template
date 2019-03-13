import React, { Component } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Row,
  Table,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  Label,
} from 'reactstrap';

class Billing extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>


          <Col xs="12" sm="6" lg='12'>
            <Form action="#" method="post" encType="multipart/form-data" className="form-horizontal">
            <Card>
              <CardHeader className="text-center">
                <strong>Add New Unit</strong>
              </CardHeader>
              <CardBody>

                <FormGroup row>
                  <Col lg='6'>
                    <Label htmlFor="unitNumber"><strong>Unit No.</strong></Label>
                    <Input type="number" id="unitNumber" placeholder="023456798" />

                  </Col>

                  <Col lg='10'>
                    <Label htmlFor="unitNumber"><strong>Tenants Name</strong></Label>
                    <Input type="text" id="unitNumber" placeholder="John Smith" />
                  </Col>

                  <Col lg='12'>
                    <Label htmlFor="unitNumber"><strong>Address</strong></Label>
                    <Input type="text" id="unitNumber" placeholder="Enter unit number" />
                  </Col>

                  <Col lg='6'>
                    <Label htmlFor="unitNumber"><strong>TIN No.</strong></Label>
                    <Input type="text" id="unitNumber" placeholder="Enter unit number" />
                  </Col>

                  <Col lg='6'>
                    <Label htmlFor="unitNumber"><strong>Signatory</strong></Label>
                    <Input type="text" id="unitNumber" placeholder="Enter unit number" />
                  </Col>

                  <Col lg='6'>
                    <Label htmlFor="unitNumber"><strong>Parking No.</strong></Label>
                    <Input type="number" id="unitNumber" placeholder="Enter unit number" />
                  </Col>

                  <Col lg='12'>
                    <Label htmlFor="unitNumber"><strong>Parking Slot</strong></Label>
                    <Input type="text" id="unitNumber" placeholder="Enter unit number" />
                  </Col>

                  <Col lg='8'>
                    <Label htmlFor="unitNumber"><strong>Building Rate</strong></Label>
                    <Input type="number" id="unitNumber" placeholder="Enter unit number" />
                  </Col>

                  <Col lg='6'>
                    <Label htmlFor="unitNumber"><strong>Floor Area</strong></Label>
                    <Input type="number" id="unitNumber" placeholder="Enter unit number" />
                  </Col>

                  <Col lg='6'>
                    <Label htmlFor="unitNumber"><strong>Telephone Share </strong></Label>
                    <Input type="number" id="unitNumber" placeholder="Enter unit number" />

                  </Col>

                  </FormGroup>
                  <FormGroup>
                  <Col lg='12'>
                    <FormGroup check className="checkbox">
                      <Input className="form-check-input" type="checkbox" id="checkbox2" name="checkbox2" value="option2" />
                      <Label check className="form-check-label" htmlFor="checkbox2"><strong>Active</strong></Label>
                    </FormGroup>

                    <FormGroup check className="checkbox">
                      <Input className="form-check-input" type="checkbox" id="checkbox3" name="checkbox2" value="option2" />
                      <Label check className="form-check-label" htmlFor="checkbox3"><strong>Share in Aircon</strong></Label>
                    </FormGroup>
                  </Col>
                  </FormGroup>
                  <FormGroup row>

                  <Col lg='6'>
                    <Label htmlFor="unitNumber"><strong>Contract Begin</strong></Label>
                    <Input type="date" id="unitNumber" placeholder="03/10/2018" />
                  </Col>

                  <Col lg='6'>
                    <Label htmlFor="unitNumber"><strong>Contract Ends</strong></Label>
                    <Input type="date" id="unitNumber" placeholder="03/10/2019" />
                  </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col lg='1'>
                      <Label htmlFor="unitNumber"><strong>Floor</strong></Label>
                      <Input type="number" id="unitNumber" placeholder="0" />
                    </Col>

                    <Col lg='11' >
                      <Row>
                        <Col lg='3' >
                          <strong>0  : Basement</strong>
                        </Col>
                        <Col lg='3' >
                          <strong>1  : First floor</strong>
                        </Col>
                        <Col lg='3' >
                          <strong>2  : Second floor</strong>
                        </Col>
                        <Col lg='3' >
                          <strong>3  : Third floor</strong>
                        </Col>
                      </Row>

                      <Row>
                        <Col lg='3' >
                          <strong>4  : Fourth floor</strong>
                        </Col>
                        <Col lg='3' >
                          <strong>5  : Fifth floor</strong>
                        </Col>
                        <Col lg='3' >
                          <strong>6  : Sixth floor</strong>
                        </Col>
                        <Col lg='3' >
                          <strong>7  : Seventh floor</strong>
                        </Col>
                      </Row>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col lg='1'>
                      <Label htmlFor="unitNumber">Type</Label>
                      <Input type="text" id="unitNumber" placeholder="A" />
                    </Col>

                    <Col lg='11' >
                      <Row>
                        <Col lg='6' >
                          <strong>A  : Own meter for both Aircon & Power</strong>
                        </Col>
                        <Col lg='6' >
                          <strong>B  : Own meter but not centralize Aircon</strong>
                        </Col>
                      </Row>

                      <Row>
                        <Col lg='6' >
                          <strong>C  : Own meter for additional Aircon only</strong>
                        </Col>
                        <Col lg='6' >
                          <strong>D  : Without meters</strong>
                        </Col>
                      </Row>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col xs="12" md="12" lg='12'>
                      <Input type="textarea" name="textarea-input" id="textarea-input" rows="9"
                             placeholder="Content..." />
                    </Col>
                  </FormGroup>
              </CardBody>
              <CardFooter>
                <Row>
                  <Col lg='1'>
                    <Button type="button" size="md" color="success"> Submit</Button>
                  </Col>
                  <Col lg='1'>
                    <Button type="reset" size="md" color="danger">Reset</Button>
                  </Col>
                </Row>
              </CardFooter>
            </Card>
            </Form>
          </Col>


        </Row>
      </div>
    );
  }
}

export default Billing;
