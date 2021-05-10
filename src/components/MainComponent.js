import { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className="col">
                <Card className="m-3">
                    <CardBody>
                        <CardTitle><h2>Card title</h2></CardTitle>
                        <CardText>
                            <div>
                                <p>This is some text</p>
                                <button className="btn btn-primary">some button</button>
                            </div>
                        </CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default Main;