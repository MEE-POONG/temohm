import { Button, OverlayTrigger, Tooltip, Row, Col, Image, Container, Table } from 'react-bootstrap';
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

                    <Image src="https://i.imgur.com/PEgflZ4.jpeg" className='img' />

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
                        <h1 className='fontheader'>business</h1>
                            

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

                    <Image src="https://i.imgur.com/PEgflZ4.jpeg" className='img' />

                </div>
                <div className='img-bg'>
                    <Image src="https://i.imgur.com/SRvOobE.png" className='imgbg' />

                </div>
            </section>
        </Container>

    );
}

export default Index;