import React from 'react';
import {View, Text} from 'react-native';


function Greeting(props) {
    return (
        <View>
            <Text>안녕하세요 {props.name} 컴포넌트!</Text>
            <Text>Extra Text!</Text>
        </View>
    );
}

Greeting.defaultProps = {
    name: '리액트 네이티브',
};

export default Greeting;