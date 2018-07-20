import React
    from 'react';
import {View, Text} from 'react-native';
import {Avatar} from 'react-native-elements';
import {
    AppLoading,
    Font
} from 'expo';

import FontAwesome
    from './node_modules/@expo/vector-icons/fonts/FontAwesome.ttf';
import MaterialIcons
    from './node_modules/@expo/vector-icons/fonts/MaterialIcons.ttf';

export default class App extends React.Component {
    state = {
        fontLoaded: false
    };
    async componentWillMount(){
        try{
            await Font.loadAsync({
                FontAwesome,
                MaterialIcons
            });
            this.setState({fontLoaded: true});
        }catch(error){
            console.log('error loading icon fonts', error);
        }
    }
    render(){
        if(!this.state.fontLoaded){
            return <AppLoading/>;
        }
        return (
            <View>
                <Text>My App</Text>
                <Avatar small rounded icon={{name: 'add'}}/>
            </View>
        );
    }
}