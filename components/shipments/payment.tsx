import { View, Text, TouchableOpacity, Image } from 'react-native';

export default function Payment({ navigation }: any) {
  return (
    <View className="flex-1 pt-[44px] px-[15px]">
      <View className="flex-row justify-between items-center">
        <TouchableOpacity className="p-[14px] rounded-[10px] border border-[#E8E6EA]" onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/app/caretLeft.png')} />
        </TouchableOpacity>

        <Text className="text-xl leading-[24.2px] text-center font-semibold">Payment</Text>

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
          <Image source={require('../../assets/app/packageProgressGreen.png')} />
          <Text>Address</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Payment')} className="items-center">
          <Image source={require('../../assets/app/packageProgressGreen.png')} />
          <Text>Payment</Text>
        </TouchableOpacity>
      </View>

      <View className="mt-[30px]">
        <Text className="text-sm leading-[21px]">Your Order</Text>

        <View className="bg-[#4E5156] px-[15px] py-4 rounded-[12px] mt-5">
          <View>
            {/* image */}
            <View>
              <Text className="text-[#ADAFBB]">Alex May</Text>
              <Text className="text-white my-2">Kilometer 6, 278H, Street 201R, Kroalkor Village, Unnamed Road, Phnom Penh</Text>
              <Text className="text-white">+1 (444) 0980 980</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
