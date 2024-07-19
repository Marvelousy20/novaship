import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';

export default function Payment({ navigation }: any) {
  return (
    <View className="flex-1 pt-[44px] px-[15px]">
      <ScrollView className="flex-1 mb-[30px]">
        <View className="flex-row justify-between items-center">
          <View className="flex-row items-center gap-[23px]">
            <TouchableOpacity className="p-[14px] rounded-[10px] border border-[#E8E6EA]" onPress={() => navigation.goBack()}>
              <Image source={require('../../assets/app/caretLeft.png')} />
            </TouchableOpacity>

            <Text className="text-xl leading-[24.2px] text-center font-semibold">Payment</Text>
          </View>

          <View>
            <Image source={require('../../assets/app/burger2.png')} />
          </View>
        </View>

        <View className="mt-5 flex-row justify-around items-center">
          <Image source={require('../../assets/app/dotted_lines.png')} className="absolute top-[10px]" />
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

          <View className="bg-[#4E5156] px-[15px] py-4 rounded-[12px] mt-5 mb-[30px]">
            <Image source={require('../../assets/app/vertical_dotted_lines.png')} className="absolute left-[25px] top-4" />
            <View className="items-start flex-row gap-[9px] mb-[30px]">
              <Image source={require('../../assets/app/packageProgressGreen.png')} />
              <View>
                <Text className="text-[#ADAFBB]">Alex May</Text>
                <Text className="text-white my-2">Kilometer 6, 278H, Street 201R, Kroalkor Village, Unnamed Road, Phnom Penh</Text>
                <Text className="text-white">+1 (444) 0980 980</Text>
              </View>
            </View>

            <View className="items-start flex-row gap-[9px]">
              <Image source={require('../../assets/app/packageProgressGray.png')} />
              <View>
                <Text className="text-[#ADAFBB]">Johnson Smith</Text>
                <Text className="text-white my-2">2nd Floor 01, 25 Mao Tse Toung Blvd (245), Phnom Penh 12302, Cambodia</Text>
                <Text className="text-white">+1 (444) 0980 980</Text>
              </View>
            </View>
          </View>

          <View className="mb-[30px]">
            <Text className="leading-[27px] text-lg font-medium">Select Payment Method</Text>

            <View>
              <View className="flex-row items-center justify-between mt-5">
                <View className="flex-row gap-5">
                  <Image source={require('../../assets/app/icon_card.png')} />
                  <View>
                    <Text className="text-sm leading-[16.94px]">Debit/Credit Card</Text>
                    <Text>**** **** **** 2022</Text>
                  </View>
                </View>

                <View className="w-[18px] h-[18px] rounded-full border border-[#00997D]"></View>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate('AddNewCard')} className="border border-[#00997D] rounded-[24px] py-[16.5px] w-full mt-[15px]">
                <Text className="font-[500] text-lg leading-[21.78px] text-center text-[#00997D]">+ Add Card</Text>
              </TouchableOpacity>
            </View>

            <View className="my-[30px] flex-row justify-between items-center">
              <View className="flex-row gap-5 items-center">
                <Image source={require('../../assets/app/apple_pay_icon.png')} />
                <Text className="text-sm leading-[16.94px]">Apple Pay</Text>
              </View>

              <View className="w-[18px] h-[18px] rounded-full border border-[#00997D]"></View>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('ConnectWallet')} className="flex-row justify-between items-center">
              <View className="flex-row gap-5 items-center">
                <Image source={require('../../assets/app/crypto_icon.png')} />
                <Text className="text-sm leading-[16.94px]">Crypto Wallet</Text>
              </View>

              <View className="w-[18px] h-[18px] rounded-full border border-[#00997D]"></View>
            </TouchableOpacity>
          </View>

          {/* divider */}
          <Image source={require('../../assets/app/divider.png')} />

          <View className="mt-[30px] mb-[15px]">
            <Text className="font-medium leading-[27px] text-lg">Checkout</Text>

            <View className="flex-row justify-between items-center mt-[15px] mb-[10px]">
              <Text className="font-medium leading-[21px] text-sm">Shipping Fee</Text>
              <Text className="text-xs leading-[18px]">$300.00</Text>
            </View>

            <View className="flex-row justify-between items-center">
              <Text className="font-medium leading-[21px] text-sm">Discount</Text>
              <Text className="text-xs leading-[18px]">$2.00</Text>
            </View>
          </View>

          {/* divider */}
          <Image source={require('../../assets/app/divider.png')} />

          <View className="flex-row justify-between items-center my-[15px]">
            <Text className="font-medium leading-[21px] text-sm">Total</Text>
            <Text className="text-xs leading-[18px] font-medium">$298.00</Text>
          </View>

          {/* divider */}
          <Image source={require('../../assets/app/divider.png')} />

          <TouchableOpacity onPress={() => navigation.navigate('ConnectWallet')} className="bg-[#00997D] rounded-[24px] py-[16.5px] w-full mt-[15px]">
            <Text className="font-[500] text-lg leading-[21.78px] text-center text-white">Pay Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
