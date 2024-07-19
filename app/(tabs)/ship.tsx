import React from 'react';
import SendPackage from '../../components/shipments/sendPackage';
import Ship from '../../components/shipments/ship';
import ShipmentAddress from '../../components/shipments/address';
import Payment from '../../components/shipments/payment';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Shipment = createNativeStackNavigator();

const ShipTab = () => {
  return (
    <Shipment.Navigator screenOptions={{ headerShown: false }}>
      <Shipment.Screen name="Ship" component={Ship}></Shipment.Screen>
      <Shipment.Screen name="SendPackage" component={SendPackage}></Shipment.Screen>
      <Shipment.Screen name="ShipmentAddress" component={ShipmentAddress}></Shipment.Screen>
      <Shipment.Screen name="Payment" component={Payment}></Shipment.Screen>
    </Shipment.Navigator>
  );
};

export default ShipTab;
