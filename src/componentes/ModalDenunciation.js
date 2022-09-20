import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
// import FormDenunciationVanilla from './FormDenunciationVanilla'
// import FormDenunciationFormik from './FormDenunciationFormik'

const ModalDenunciation = (props) => {


  const { onClose } = props

  return (
    <View style={styles.container}>
      <View style={styles.childContainer}>
        <View style={styles.contentTitle}>
          <Text style={styles.title}>Registrar Denuncia</Text>
        </View>
        {/* <FormDenunciationFormik onClose={onClose} /> */}
      </View>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '90%',
    height: '90%',
    top: 0,
    backgroundColor: 'white',
    zIndex: 1010,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  childContainer: {
    //height: '70%',
    width: '80%',
    backgroundColor: '#FFF',
    elevation: 5,
    borderRadius: 5
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  contentTitle: {
    alignItems: 'center',
    padding: 10
  }
})

export default ModalDenunciation