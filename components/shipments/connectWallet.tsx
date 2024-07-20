import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';

export default function ConnectWallet({ navigation }: any) {
  const [wallets, setWallets] = useState([
    {
      id: 1,
      image: require('../../assets/app/metamask.png'),
      text: 'Metamask',
      clicked: false,
    },
    {
      id: 2,
      image: require('../../assets/app/walletConnect.png'),
      text: 'Wallet Connect',
      clicked: false,
    },
    {
      id: 3,
      image: require('../../assets/app/coinbase.png'),
      text: 'Coinbase Connect',
      clicked: false,
    },
  ]);

  const handleSetWallet = function (id: number) {
    setWallets((prevValue) => prevValue.map((wallet) => (wallet.id === id ? { ...wallet, clicked: true } : { ...wallet, clicked: false })));
  };

  return (
    <View className="flex-1 pt-[44px] px-[15px]">
      <View className="flex-row justify-between items-center">
        <View className="flex-row items-center gap-[23px]">
          <TouchableOpacity className="p-[14px] rounded-[10px] border border-[#E8E6EA]" onPress={() => navigation.goBack()}>
            <Image source={require('../../assets/app/caretLeft.png')} />
          </TouchableOpacity>

          <Text className="text-xl leading-[24.2px] text-center font-semibold">Connect Wallet</Text>
        </View>

        <View>
          <Image source={require('../../assets/app/burger2.png')} />
        </View>
      </View>

      <Text className="mt-5 mb-[39px] text-[#777777] text-sm leading-[22px] text-center">Select a wallet you want to connect to NovaShip</Text>

      <View className="gap-[15px] mb-[30px]">
        {wallets.map((wallet) => (
          <TouchableOpacity key={wallet.id} onPress={() => handleSetWallet(wallet.id)} className={`border ${wallet.clicked ? 'border-[#00997D]' : 'border-[#E8E6EA] '} rounded-[12px] py-[13px] px-[15px] flex-row items-center justify-between`}>
            <View className="flex-row items-center gap-[14px]">
              <Image source={wallet.image} />
              <Text className="text-lg font-[500] leading-[21.78px]">{wallet.text}</Text>
            </View>

            {wallet.clicked && <Image source={require('../../assets/app/checkmark.png')} />}
          </TouchableOpacity>
        ))}
      </View>

      <Text className="text-xs leading-[18px] text-center font-[500] mb-[30px]">
        By using NovaShip, you agree with our <Text className="text-[#00997D] underline">Tariff/Terms & Conditions & Privacy Policy</Text>
      </Text>

      <TouchableOpacity className="bg-[#00997D] rounded-[24px] py-[16.5px] w-full mt-[15px]">
        <Text className="font-[500] text-lg leading-[21.78px] text-center text-white">Connect</Text>
      </TouchableOpacity>
    </View>
  );
}
