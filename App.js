import * as React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import {styles} from './style'

export default class App extends React.Component {  

  constructor(props){
    super(props)
    this.state = {
      display: '',
      result: ''
    }
  }

  handleOp(op){
    if(op === 'C'){
      this.setState({
        display: '',
        result: ''
      })
    }else if(op === '='){
      this.setState({
        display: this.state.result,
        result: ''
      })

    }else{
      const display = this.state.display + op
      let result = this.state.result

      try{
        let fixedOperation = display.split('x').join('*')
        fixedOperation = fixedOperation.split(',').join('.')
        result = new String(eval(fixedOperation)).toString().split('.').join(',')
      }catch(e){

      }

      this.setState({
        display,
        result
      })
    } 
  }
  
  render(){  
    const col1Buttons = [
      ['7', '8', '9'],
      ['4', '5', '6'],
      ['1', '2', '3'],
      [',', '0', '=']
    ]

    const col2Buttons = ['C', '/', 'x', '-', '+']

    return (
      <View style={styles.container}>
        <Text style={styles.display}>{this.state.display}</Text>
        <Text style={styles.result}>{this.state.result}</Text>    

        <View style={styles.buttons}>
          <View style={styles.col1}>
            {col1Buttons.map((line, ind) => <View key={ind} style={styles.line}>
              {line.map(op => <TouchableOpacity key={op} style={styles.btn} onPress={() => this.handleOp(op)}>
                  <Text style={styles.btnText}>
                    {op}
                  </Text>
                </TouchableOpacity>)}              
            </View>            
            )}    
          </View>

          <View style={styles.col2}>
            {col2Buttons.map(op => <TouchableOpacity key={op} style={styles.btn} onPress={() => this.handleOp(op)}>
                  <Text style={styles.btnText}>
                    {op}
                  </Text>
                </TouchableOpacity>)}
          </View>

        </View>
      </View>
    )
  }
}


