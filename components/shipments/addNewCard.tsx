import { View, TouchableOpacity, Text, Image, TextInput } from 'react-native';

export default function AddNewCard({ navigation }: any) {
  return (
    <View className="flex-1 pt-[44px] px-[15px]">
      <View className="flex-row justify-between items-center">
        <TouchableOpacity className="p-[14px] rounded-[10px] border border-[#E8E6EA]" onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/app/caretLeft.png')} />
        </TouchableOpacity>

        <Text className="text-xl leading-[24.2px] text-center font-semibold">Add New Card</Text>

        <View>
          <Image source={require('../../assets/app/burger2.png')} />
        </View>
      </View>

      <Image source={require('../../assets/app/mastercard.png')} className="mt-5" />

      <View className="mt-5">
        <View className="border border-[#E8E6EA] rounded-[12px] h-[67px] mt-[15px] relative mb-[10px]">
          <Text className="text-xs leading-[18px] absolute -top-2 left-5 bg-gray-100 px-2 text-gray-400">Card Number*</Text>
          <TextInput className="px-[15px] w-full h-full" />
        </View>

        <View className="flex-row items-center justify-between">
          <View className="border border-[#E8E6EA] rounded-[12px] h-[67px] mt-[15px] relative w-[48%]">
            <Text className="text-xs leading-[18px] absolute -top-2 left-5 bg-gray-100 px-2 text-gray-400">CVV*</Text>
            <TextInput className="px-[15px] w-full h-full" />
          </View>

          <View className="border border-[#E8E6EA] rounded-[12px] h-[67px] mt-[15px] relative w-[48%]">
            <Text className="text-xs leading-[18px] absolute -top-2 left-5 bg-gray-100 px-2 text-gray-400">Expiry Date*</Text>
            <TextInput className="px-[15px] w-full h-full" />
          </View>
        </View>

        <View className="border border-[#E8E6EA] rounded-[12px] h-[67px] mt-[15px] relative mb-[10px]">
          <Text className="text-xs leading-[18px] absolute -top-2 left-5 bg-gray-100 px-2 text-gray-400">Card Holder Name*</Text>
          <TextInput className="px-[15px] w-full h-full" />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('ConnectWallet')} className="bg-[#00997D] rounded-[24px] py-[16.5px] w-full mt-[15px]">
          <Text className="font-[500] text-lg leading-[21.78px] text-center text-white">+ Add Card</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
