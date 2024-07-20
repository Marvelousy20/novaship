import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
interface MenuContextType {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  token: string;
  setToken: (token: string) => void;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenu must be used within a MenuProvider");
  }
  return context;
};

export const MenuProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [token, setToken] = useState("");
  useEffect(() => {
    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("verifiedEmail");
        if (jsonValue != null) {
          const data = JSON.parse(jsonValue);

          // Extract user token from the nested structure
          const userToken = data?.data?.token;
          setToken(userToken);
          console.log("usertokenn:", token);
          console.log("alldata", data);
        }
      } catch (e) {
        console.error("Failed to fetch the data from storage", e);
      }
    };

    getData();
  }, []);

  console.log("test", token);
  return (
    <MenuContext.Provider
      value={{ isMenuOpen, setIsMenuOpen, token, setToken }}
    >
      {children}
    </MenuContext.Provider>
  );
};
