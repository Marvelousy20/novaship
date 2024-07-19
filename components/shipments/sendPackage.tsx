import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

export default function SendPackage({ navigation }: any) {
  const [selectedSizes, setSelectedSizes] = useState<string>('');
  const handleClick = function () {
    console.log('clicked');
  };

  return (
    <View className="flex-1 pt-[44px] px-[15px]">
      <View className="flex-row justify-between items-center">
        <TouchableOpacity className="p-[14px] rounded-[10px] border border-[#E8E6EA]" onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/app/caretLeft.png')} />
        </TouchableOpacity>

        <Text className="text-xl leading-[24.2px] text-center font-semibold">Send Package</Text>

        <View>
          <Image source={require('../../assets/app/burger2.png')} />
        </View>
      </View>

      <View className="mt-5 flex-row justify-around items-center">
        {/* come back to this later */}
        <Image source={require('../../assets/app/dotted_lines.png')} className="absolute " />
        <TouchableOpacity onPress={() => navigation.navigate('SendPackage')} className="items-center">
          <Image source={require('../../assets/app/packageProgressGreen.png')} />
          <Text>Parcel</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('ShipmentAddress')} className="items-center">
          <Image source={require('../../assets/app/packageProgressGray.png')} />
          <Text>Address</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Payment')} className="items-center">
          <Image source={require('../../assets/app/packageProgressGray.png')} />
          <Text>Payment</Text>
        </TouchableOpacity>
      </View>

      <View className="mt-[25px]">
        <Text className="font-semibold text-lg leading-[27px]">Shipment Type</Text>

        <TouchableOpacity onPress={handleClick} className="mt-[25px] border-[#E8E6EA] border h-[58px] px-[15px] mx-[15px] rounded-[10px] relative flex-row items-center justify-between">
          <Text className="text-xs leading-[18px] absolute -top-2 left-5 bg-gray-100 px-2">Type*</Text>
          <Text className="leading-[21px] text-sm my-auto">Select Shipment Type</Text>
          <Image source={require('../../assets/app/grayCaretDown.png')} />
        </TouchableOpacity>
      </View>

      <View className="mt-[30px]">
        <Text className="font-semibold text-lg leading-[27px]">Package Size</Text>

        <View className="gap-[15px] flex-row items-center justify-between">
          <TouchableOpacity className={`border rounded-[12px] w-[100px] h-[100px] items-center justify-center ${selectedSizes === '< 1 kg' ? 'border-[#00997D]' : 'border-[#E8E6EA]'}`} onPress={() => setSelectedSizes('< 1 kg')}>
            <Image source={require('../../assets/app/gray_box.png')} />
            <Text className="text-[#414A53] text-sm leading-[21px] pt-[5px]">{`< 1 kg`}</Text>
          </TouchableOpacity>

          <TouchableOpacity className={`border rounded-[12px] w-[100px] h-[100px] items-center justify-center ${selectedSizes === '3kg - 10kg' ? 'border-[#00997D]' : 'border-[#E8E6EA]'}`} onPress={() => setSelectedSizes('3kg - 10kg')}>
            <View className="flex-row items-center">
              <Image source={require('../../assets/app/green_box.png')} />
              <Image source={require('../../assets/app/green_box.png')} />
            </View>
            <Text className="text-[#414A53] text-sm leading-[21px] pt-[5px]">{`3kg - 10kg`}</Text>
          </TouchableOpacity>

          <TouchableOpacity className={`border rounded-[12px] w-[100px] h-[100px] items-center justify-center ${selectedSizes === '> 10kg' ? 'border-[#00997D]' : 'border-[#E8E6EA]'}`} onPress={() => setSelectedSizes('> 10kg')}>
            <View className="items-center">
              <Image source={require('../../assets/app/gray_box.png')} className="w-[16px] h-[16px]" />
              <View className="flex-row">
                <Image source={require('../../assets/app/gray_box.png')} className="w-[16px] h-[16px]" />
                <Image source={require('../../assets/app/gray_box.png')} className="w-[16px] h-[16px]" />
              </View>
            </View>
            <Text className="text-[#414A53] text-sm leading-[21px] pt-[5px]">{`> 10kg`}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="mt-[30px]">
        <Text className="font-semibold text-lg leading-[27px]">Delivery Type</Text>

        <View className="mt-[25px] border-[#E8E6EA] border h-[58px] px-[15px] mx-[15px] rounded-[10px] relative flex-row items-center justify-between">
          <Text className="text-xs leading-[18px] absolute -top-2 left-5 bg-gray-100 px-2">Type*</Text>
          <Text className="leading-[21px] text-sm my-auto">Select Delivery Type</Text>
          <Image source={require('../../assets/app/grayCaretDown.png')} />
        </View>
      </View>
    </View>
  );
}
