import { Button, OverlayTrigger, Tooltip, Row, Col, Image, Container, Table, box, Alert } from 'react-bootstrap';
import { GrDiamond } from 'react-icons/gr';


function Index() {
    return (

        <Container className='my-5 '>
            <section className='bgset-998'>

        

                <div className='anotherbackground'>

                    <Row>
                        <Col>

                        </Col>
                        <Col>
                            <h1 className='fonthead fontsupersize' >Making Your World a Happier Place</h1>
                            <p className='fontsubtitle '>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <p>
                                <Button variant="outline-primary" className='button'>Read more</Button>
                            </p>


                        </Col>
                    </Row>


                </div>
                <div className='img-profile'>

                    <Image src="https://i.imgur.com/PEgflZ4.jpeg" className='imge' />

                </div>
                <div className='img-bg'>
                    <Image src="https://i.imgur.com/SRvOobE.png" className='imgbg' />

                </div>
            </section>
            {/* index */}
            {/* Business */}
            <section className='bg'>



                <div className=''>

                    <Row>
                        <Col>

                        </Col>
                        <Col>
                            <Image src="https://i.imgur.com/PHCR2vy.png" className="img" />
                            <h1 className='fontheader'>business</h1>

                            <p className='fontsub'>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                        </Col>
                        <Col>

                        </Col>

                    </Row>


                </div>
                <div className='img-profile'>


                </div>
                <div className='img-bg'>


                </div>
            </section>
            {/* Business */}
            <section className='bgset-998'>



                <div className=''>
                    <h1 className='fontheader-get'>Simple prices, flexible    options & nothing hidden</h1>
                    <Row>
                        <Col>
                            <Alert className='fontsub-get bg-text'>free</Alert>
                            <Alert className='bg-text2'>
                            <p className='fontsubunder-get'>$0</p>
                            <li className='fontbody-get'>15 Users</li>
                            <li className='fontbody-get'>Feature 2</li>
                            <li className='fontbody-get'>Feature 3</li>
                            <li className='fontbody-get'>Feature 4</li>
                            <Button variant="outline-warning" className='button-get fontsub-get-button'>Get plan</Button>
                            </Alert>
                        </Col>
                        <Col>
                            <Alert className='fontsub-get bg-text'>Individual</Alert>
                            <Alert className='bg-text2'>
                            <p className='fontsubunder-get'>$29</p>
                            <li className='fontbody-get'>15 Users</li>
                            <li className='fontbody-get'>Feature 2</li>
                            <li className='fontbody-get'>Feature 3</li>
                            <li className='fontbody-get'>Feature 4</li>
                            <Button variant="outline-warning" className='button-get fontsub-get-button'>Get plan</Button>
                            </Alert>
                        </Col>
                        <Col>
                            <Alert className='fontsub-get bg-text'>Business</Alert>
                            <Alert className='bg-text2'>
                            <p className='fontsubunder-get'>$59</p>
                            <li className='fontbody-get'>15 Users</li>
                            <li className='fontbody-get'>Feature 2</li>
                            <li className='fontbody-get'>Feature 3</li>
                            <li className='fontbody-get'>Feature 4</li>
                            <Button variant="outline-warning" className='button-get fontsub-get-button'>Get plan</Button>
                            </Alert>
                        </Col>



                    </Row>
                </div>
            </section>
        </Container>

    );
}

export default Index;