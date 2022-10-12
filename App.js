import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextInput,TouchableOpacity,Image,Linking, FlatList } from 'react-native';

export default function App() {
  return (
    <View style={styles.MainContainer}>
      <TextInput
          placeholder="Search for plant"
          // onChangeText={data => this.setState({ textInput_Holder: data })}
          style={styles.textInputStyle}
          underlineColorAndroid='transparent'
        />
        <TouchableOpacity  activeOpacity={0.7} style={styles.button} >
          <Text style={styles.buttonText}> Search </Text>
        </TouchableOpacity>
        <View style={{position:'absolute',left:10,top:120}}>
          <Text style={{fontSize:30}}>Welcome</Text>
        </View>
        <View style={{position:'absolute',top:160,left:10,height:20}}>
          <Text style={{fontSize:15}}>Earth laughts through</Text>
        </View>
        <View style={{position:'absolute',top:180,left:10,height:20}}>
          <Text style={{fontSize:15}}>flowers so let her laught</Text>
        </View>
        <View>
          <Image source={require('./image/remove_bg.png')} style={{left:100}}></Image>
        </View>
        <View style={{position:'absolute',left:10,top:220}}>
          <TouchableOpacity activeOpacity={0.7} style={styles.button}>
            <Text>How to plant</Text>
          </TouchableOpacity>
        </View>
        <View style={{position:'absolute',left:10,top:320,height:100,backgroundColor:'#4CAF50', borderColor:'4CAF50',borderWidth:1,borderRadius:10,width:'90%'}}>
          <Image source={require('./image/removebg_flower.png')} style={{position :'absolute',left:0}}></Image>
          <Text style={{position:'absolute' ,left:100,fontSize:15,top:10}}>Plants pots shopping</Text>
          <Text style={{position:'absolute',left:100,top:40,fontSize:20}} onPress={() =>Linking.openURL()}>See the list</Text>
        </View>
        <View style={{position:'absolute',left:10,top:470,height:170,backgroundColor:'#4CAF50',width:120,borderRadius:10}}>
          <Image source={require('./image/removebg_flower.png')} style={{position :'absolute',left:10}}></Image>
          <View style={{position:'absolute',left:5,top:100, backgroundColor:'#fff',height:50,width:110,borderRadius:10}}>
            <Text style={{position:'absolute',left:5,top:10}}>shadown plants</Text>
            <Text style={{position:'absolute',left:5,top:25}}>230 types</Text>
          </View>
        </View>
        <View style={{position:'absolute',left:150,top:470,height:170,backgroundColor:'#4CAF50',width:120,borderRadius:10}}>
          <Image source={require('./image/removebg_flower.png')} style={{position :'absolute',left:10}}></Image>
          <View style={{position:'absolute',left:5,top:100, backgroundColor:'#fff',height:50,width:110,borderRadius:10}}>
            <Text style={{position:'absolute',left:5,top:10}}>shadown plants</Text>
            <Text style={{position:'absolute',left:5,top:25}}>230 types</Text>
          </View>
        </View>
        <View style={{position:'absolute',left:290,top:470,height:1,backgroundColor:'#4CAF50',width:120,borderRadius:10}}>
          <Image source={require('./image/removebg_flower.png')} style={{position :'absolute',left:10}}></Image>
          <View style={{position:'absolute',left:5,top:100, backgroundColor:'#fff',height:50,width:110,borderRadius:10}}>
            <Text style={{position:'absolute',left:5,top:10}}>shadown plants</Text>
            <Text style={{position:'absolute',left:5,top:25}}>230 types</Text>
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    alignItems: 'center',
    flex: 1,
    margin: 2
  },
  textInputStyle: {
    textAlign: 'center',
    height: 40,
    width: '90%',
    borderWidth: 1,
    borderColor: '#4CAF50',
    borderRadius: 7,
    marginTop: 12
  },
  button: {
    width: '90%',
    height: 40,
    padding: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    marginTop: 10
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});
