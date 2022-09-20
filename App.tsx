/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 
 import React, { useState, useEffect } from 'react';
 import {
   SafeAreaView,
   Button,
   StatusBar,
   Text,
   useColorScheme,
   View,
   FlatList,
   Image
 } from 'react-native';
 import firestore from '@react-native-firebase/firestore'; 
 import storage from '@react-native-firebase/storage';



//  import Denunciaton from './src/screens/denunciation'
//  import Login from './src/screens/login';
 import ModalDenunciation from './src/componentes/ModalDenunciation';
 import ItemDenunciation from "./src/componentes/ItemDenunciation";
//  import Denunciation from "./src/screens/denunciation";
//  import getDenunciation from "./src/crud/getDenunciation";








 const App = () => {
   const isDarkMode = useColorScheme() === 'dark';
   const [isVisible, setIsVisible] = useState(true)
   const [denunciation, setDenunciation] = useState([])
 

   useEffect(() => {
     Denunciation()
   }, [])
  

   const Denunciation = () => {
    firestore()
      .collection('denunciation')
      .onSnapshot(async (fDenunciation) => { 
        let tempDenunciation = [];
        let promiseImages = [];
        fDenunciation.forEach(fDenun => {
          tempDenunciation.push(fDenun.data());
          promiseImages.push(
            storage().ref(fDenun.data().image).getDownloadURL(),
          );
          // console.log('products', fProduct.data())
        });

        const resultPromises = await Promise.all(promiseImages);

        resultPromises.forEach((url, index) => {
          tempDenunciation[index].image = url;
        });

        setDenunciation(tempDenunciation);
      });
  };

  
  const handleModal = () => {
    setIsVisible(true);
  };

  const handleOnClose = () => {
    setIsVisible(false)
  }






   














   return (
     <SafeAreaView style={{flex: 1}}>
       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />  
       <FlatList
          data = {denunciation}
          renderItem = {ItemDenunciation}
        />
       {/* <Denunciation/>  */}

       <Button
        // style={{height: '5%'}}
        title="Realizar Denuncia"
        onPress={handleModal}
      />
      {isVisible && <ModalDenunciation onClose={handleOnClose} />}




     </SafeAreaView>
   );






  //  return (
  //   <View>
  //     <FlatList
  //       style={{height: '95%'}}
  //       data = {denunciation}
  //       renderItem = {ItemDenunciation}
  //       keyExtractor={item => item.id}
  //     />
  //     <Button
  //       // style={{height: '5%'}}
  //       title="Realizar Denuncia"
  //       onPress={handleModal}
  //     />
  //     {isVisible && <ModalDenunciation onClose={handleOnClose} />}
  //   </View>
  // );

 };

 
 export default App;