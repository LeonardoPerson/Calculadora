import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center'

  },
  display: {
    flex: 1,
    backgroundColor: '#EFEFEF',
    fontSize: 80,
    textAlign: 'right',
    paddingTop: 30,
    paddingRight: 10
  },
  result: {
    flex: 0.4,
    backgroundColor: '#EFEFEF',
    fontSize: 40,
    textAlign: 'right',
    paddingRight: 10,
    paddingBottom: 10
  },
  buttons: {
    flex: 5,
    flexDirection: 'row',
  },
  col1: {
    flex: 3,
    backgroundColor: 'black',
    padding: 2
  },
  line: {
    flex: 1,
    flexDirection: 'row',
    padding: 2

  },
  col2: {
    flex: 1,
    backgroundColor: 'red',
    backgroundColor: 'black'

  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#0f0f0f'

  },
  btnText: {
    textAlign: 'center',
    fontSize: 50,
    color: 'white'
  }
})