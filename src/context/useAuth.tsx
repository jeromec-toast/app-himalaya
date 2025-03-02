import { createContext, useEffect, useState } from "react";
import { UserProfile } from "../modals/user"
import { useNavigate } from "react-router-dom";
import React from "react";
import endpoints from "../api/endpoints/endpoints";
import { toast } from "react-toastify";

type UserContextType = {
    user: UserProfile | null;
    token: string | null;
    registerUser: (email: string, username: string, password: string) => void;
    loginUser: (username: string, password: string) => void;
    logout: () => void;
    isLoggedIn: () => boolean;
    isSystemAdmin: () => boolean;
};

type Props = { children: React.ReactNode };

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: Props) => {
    // const navigate = useNavigate();
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<UserProfile | null>(null);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem("user");
        // const token = localStorage.getItem("token");
        if (user) {
            setUser(JSON.parse(user));
            setToken(token);
        }
        setIsReady(true);
    }, []);

    const registerUser = async (
        email: string,
        username: string,
        password: string
    ) => {
        // await registerAPI(email, username, password)
        //   .then((res) => {
        //     if (res) {
        //       localStorage.setItem("token", res?.data.token);
        //       const userObj = {
        //         userName: res?.data.userName,
        //         email: res?.data.email,
        //       };
        //       localStorage.setItem("user", JSON.stringify(userObj));
        //       setToken(res?.data.token!);
        //       setUser(userObj!);
        //       toast.success("Login Success!");
        //       navigate("/search");
        //     }
        //   })
        //   .catch((e) => toast.warning("Server error occured"));
    };

    const loginUser = async (username: string, password: string) => {
        endpoints
            .loginUser(username, password)
            .then((response: any) => {
                if (response != null) {
                try {
                    localStorage.setItem("user", JSON.stringify(response));
                    setUser(response!);
                    toast.success("Login Success!");
                    // navigate("/products");
                } catch (exception) {
                    toast.warning("error")
                }
            }
            })
            .catch((error) => {
                toast.warning(error)
              })
        // const { data } = useLoginUserQuery(username,password)
        // await loginAPI(username, password)
        //   .then((res) => {
        //     if (res) {
        //       localStorage.setItem("token", res?.data.token);
        //       const userObj = {
        //         userName: res?.data.userName,
        //         email: res?.data.email,
        //       };
        //       localStorage.setItem("user", JSON.stringify(userObj));
        //       setToken(res?.data.token!);
        //       setUser(userObj!);
        //       toast.success("Login Success!");
        //       navigate("/search");
        //     }
        //   })
        //   .catch((e) => toast.warning("Server error occured"));
    };

    const isSystemAdmin = () => {
        return !!user?.isSystemUser;
    }

    const isLoggedIn = () => {
        return !!user;
    };

    const logout = () => {
        localStorage.removeItem("user");
        setUser(null);
    };

    return (
        <UserContext.Provider
            value={{ loginUser, user, token, logout, isLoggedIn, registerUser, isSystemAdmin }}
        >
            {isReady ? children : null}
        </UserContext.Provider>
    );
};

export const useAuth = () => React.useContext(UserContext);
