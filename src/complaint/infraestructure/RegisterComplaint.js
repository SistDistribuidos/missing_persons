import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ComponentHeader from './components/ComponentHeader'
import DataModal from '../domain/DataModal'
import useModal from '../application/UseModal'
import ModalSwal from './ModalSwal'
import AddInformation from './AddInformation'
import Colors from '../domain/Colors'
import ComplaintRegisterData from '../domain/ComplaintRegisterData'
import ProgressLine from './components/ProgressLine'
import * as Animatable from 'react-native-animatable';
import AddAppearance from './AddAppearance'
import AddDisappearanceData from './AddDisappearanceData'
import AddImagesAndFiles from './AddImagesAndFiles'

const RegisterComplaint = () => {
  const [viewScreen, setViewScreen] = useState(1)

  const value_modal = new DataModal();
  value_modal.setTitle("NUEVA PUBLICACION !!!");
  value_modal.setDescription("Lamentamos mucho la situacion en la que te encuentras, esperamos que esto ayude a encontrar a esa persona para que puedas reunirte con ella en un futuro. ");
  const modalSwal = useModal(true);

  const data_complaint_register = new ComplaintRegisterData();

  const select_progres_line = (val) => {
    if (val<viewScreen) {
      let progres_line = val / 2.5;
      console.log(progres_line);
      if (progres_line <= 1) {
        setViewScreen(1);
      } else if (progres_line > 1 && progres_line <= 2) {
        setViewScreen(2);
      } else if (progres_line > 2 && progres_line <= 3) {
        setViewScreen(3);
      } else {
        setViewScreen(4);
      }
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ModalSwal
        visible={modalSwal.visible}
        onClose={modalSwal.handleCloseModal}
        onAccept={modalSwal.handleCloseModal}
        title={value_modal.getTitle()}
        description={value_modal.getDescription()}
      />

      <ComponentHeader name_app='Registrar Denuncia'>
      </ComponentHeader>

      <View style={{ flex: 5, backgroundColor: Colors.WHITE }}>

        <Animatable.View
          animation={viewScreen === 1 ? 'bounceInUp' : 'fadeOutUp'} duration={1500}
          style={{ flex: 1, display: viewScreen === 1 ? 'flex' : 'none' }}
        >
          <AddInformation register_Data={data_complaint_register} button_next={(val) => setViewScreen(val)} />
        </Animatable.View>

        <Animatable.View
          animation={viewScreen === 2 ? 'bounceInUp' : 'fadeOutUp'} duration={1500}
          style={{ flex: 1, display: viewScreen === 2 ? 'flex' : 'none' }}
        >
          <AddAppearance register_Data={data_complaint_register} button_next={(val) => setViewScreen(val)}></AddAppearance>
        </Animatable.View>

        <Animatable.View
          animation={viewScreen === 3 ? 'bounceInUp' : 'fadeOutUp'} duration={1500}
          style={{ flex: 1, display: viewScreen === 3 ? 'flex' : 'none' }}
        >
          <AddDisappearanceData register_Data={data_complaint_register} button_next={(val) => setViewScreen(val)} />
        </Animatable.View>

        <Animatable.View
          animation={viewScreen === 4 ? 'bounceInUp' : 'fadeOutUp'} duration={1500}
          style={{ flex: 1, display: viewScreen === 4 ? 'flex' : 'none' }}
        >
          <AddImagesAndFiles register_Data={data_complaint_register} button_next={(val) => setViewScreen(val)} />
        </Animatable.View>

      </View>

      <View style={{ flex: 1, backgroundColor: Colors.WHITE }}>
        <ProgressLine values={(-1 + viewScreen) * 2.5} changeValues={(val) => select_progres_line(val)}></ProgressLine>
      </View>
    </SafeAreaView>
  )
}

export default RegisterComplaint