import React
    from 'react';
import {
    StyleSheet,
    TextInput,
    View
} from 'react-native';
import {
    Container,
    Header,
    Title,
    Content,
    Footer,
    FooterTab,
    Button,
    Left,
    Right,
    Body,
    Icon,
    Text,
    Item,
    Picker,
    Form
} from 'native-base';
import {
    Col,
    Row,
    Grid
} from 'react-native-easy-grid';

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selected2: undefined
        };
    }

    onValueChange2(value: string){
        this.setState({
            selected2: value
        });
    }

    render(){
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='arrow-back'></Icon>
                        </Button>
                    </Left>
                    <Body>
                    <Title style={{width: 200}}> Ranglistenrechner </Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='menu'></Icon>
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <Row>
                        <Col>
                            <Form>
                                <Item picker>
                                    <Picker mode="dropdown" iosIcon={
                                        <Icon name="ios-arrow-down-outline"/>} style={{width: undefined}} placeholder="Select your SIM" placeholderStyle={{color: "#bfc6ea"}} placeholderIconColor="#007aff" selectedValue={this.state.selected2} onValueChange={this.onValueChange2.bind(this)}>
                                        <Picker.Item label="Wallet" value="key0"/>
                                        <Picker.Item label="ATM Card" value="key1"/>
                                        <Picker.Item label="Debit Card" value="key2"/>
                                        <Picker.Item label="Credit Card" value="key3"/>
                                        <Picker.Item label="Net Banking" value="key4"/>
                                    </Picker>
                                </Item>
                            </Form>
                        </Col>
                    </Row>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#777',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        marginTop: 15,
        width: 200,
        padding: 8,
        height: 30,
        borderColor: '#fff',
        borderWidth: 1
    }
});
