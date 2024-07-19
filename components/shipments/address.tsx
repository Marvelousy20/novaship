import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';

export default function ShipmentAddress({ navigation }: any) {
  const [isSenderOpen, setIsSenderOpen] = useState(false);
  const [isReceiverOpen, setIsReceiverOpen] = useState(false);
  const [senderDetails, setSenderDetails] = useState({
    fullName: '',
    phoneNumber: '',
    address: '',
  });

  const [receiverDetails, setReceiverDetails] = useState({
    fullName: '',
    phoneNumber: '',
    address: '',
  });

  const handleSenderDetails = (key: keyof typeof senderDetails) => (value: string) => {
    setSenderDetails((prev) => ({ ...prev, [key]: value }));
  };

  const handleReceiverDetails = (key: keyof typeof senderDetails) => (value: string) => {
    setSenderDetails((prev) => ({ ...prev, [key]: value }));
  };

  useEffect(() => console.log(senderDetails), [senderDetails]);

  return (
    <View className="flex-1 pt-[44px] px-[15px]">
      <View className="flex-row justify-between items-center">
        <TouchableOpacity className="p-[14px] rounded-[10px] border border-[#E8E6EA]" onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/app/caretLeft.png')} />
        </TouchableOpacity>

        <Text className="text-xl leading-[24.2px] text-center font-semibold">Address</Text>

        <View>
          <Image source={require('../../assets/app/burger2.png')} />
        </View>
      </View>

      <ScrollView className="flex-1 mb-[30px]">
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
            <Image source={require('../../assets/app/packageProgressGray.png')} />
            <Text>Payment</Text>
          </TouchableOpacity>
        </View>

        {/* sender */}
        <View className="mt-[41.5px]">
          <TouchableOpacity onPress={() => setIsSenderOpen(!isSenderOpen)} className="bg-[#00997D] flex-row justify-between rounded-[12px] h-[55px] px-[22.5px] items-center">
            <Text className="text-white leading-[21.78px] text-lg">Sender Details</Text>
            <Image source={require('../../assets/app/whiteCaretDown.png')} className={`${isSenderOpen ? 'rotate-180' : 'rotate-360'}`} />
          </TouchableOpacity>

          <View className={`${isSenderOpen ? 'block' : 'hidden'}`}>
            <View className="border border-[#E8E6EA] rounded-[12px] h-[67px] mt-[15px] relative">
              <Text className="text-xs leading-[18px] absolute -top-2 left-5 bg-gray-100 px-2 text-gray-400">Full Name*</Text>
              <TextInput className="px-[15px] w-full h-full" value={senderDetails.fullName} onChangeText={handleSenderDetails('fullName')} />
            </View>

            <View className="border border-[#E8E6EA] rounded-[12px] h-[67px] mt-[15px] relative">
              <Text className="text-xs leading-[18px] absolute -top-2 left-5 bg-gray-100 px-2 text-gray-400">Phone Number*</Text>
              <TextInput className="px-[15px] w-full h-full" value={senderDetails.phoneNumber} onChangeText={handleSenderDetails('phoneNumber')} />
            </View>

            <View className="border border-[#E8E6EA] rounded-[12px] h-[67px] mt-[15px] relative">
              <Text className="text-xs leading-[18px] absolute -top-2 left-5 bg-gray-100 px-2 text-gray-400">Address*</Text>
              <TextInput className="px-[15px] w-full h-full" value={senderDetails.address} onChangeText={handleSenderDetails('address')} />
            </View>
          </View>
        </View>

        {/* receiver */}
        <View className="mt-[41.5px]">
          <TouchableOpacity onPress={() => setIsReceiverOpen(!isReceiverOpen)} className="bg-[#00997D] flex-row justify-between rounded-[12px] h-[55px] px-[22.5px] items-center">
            <Text className="text-white leading-[21.78px] text-lg">Receiver Details</Text>
            <Image source={require('../../assets/app/whiteCaretDown.png')} className={`${isReceiverOpen ? 'rotate-180' : 'rotate-360'}`} />
          </TouchableOpacity>

          <View className={`${isReceiverOpen ? 'block' : 'hidden'}`}>
            <View className="border border-[#E8E6EA] rounded-[12px] h-[67px] mt-[15px] relative">
              <Text className="text-xs leading-[18px] absolute -top-2 left-5 bg-gray-100 px-2 text-gray-400">Full Name*</Text>
              <TextInput className="px-[15px] w-full h-full" value={receiverDetails.fullName} onChangeText={handleReceiverDetails('fullName')} />
            </View>

            <View className="border border-[#E8E6EA] rounded-[12px] h-[67px] mt-[15px] relative">
              <Text className="text-xs leading-[18px] absolute -top-2 left-5 bg-gray-100 px-2 text-gray-400">Phone Number*</Text>
              <TextInput className="px-[15px] w-full h-full" value={receiverDetails.phoneNumber} onChangeText={handleReceiverDetails('phoneNumber')} />
            </View>

            <View className="border border-[#E8E6EA] rounded-[12px] h-[67px] mt-[15px] relative">
              <Text className="text-xs leading-[18px] absolute -top-2 left-5 bg-gray-100 px-2 text-gray-400">Address*</Text>
              <TextInput className="px-[15px] w-full h-full" value={receiverDetails.address} onChangeText={handleReceiverDetails('address')} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
