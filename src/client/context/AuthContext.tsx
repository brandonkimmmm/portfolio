import { createContext, ReactNode, useContext, useState } from 'react';

type authContextType = {
	user: boolean;
	login: () => void;
	logout: () => void;
};

const authContextDefaultValues: authContextType = {
	user: null,
	login: () => {},
	logout: () => {}
};

const AuthContext = createContext<authContextType>(authContextDefaultValues);

export const useAuth = () => {
	return useContext(AuthContext);
};

type Props = {
	children: ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
	const [user, setUser] = useState<boolean>(null);

	const login = () => {
		setUser(true);
	};

	const logout = () => {
		setUser(false);
	};

	const value = {
		user,
		login,
		logout
	};

	return (
		<>
			<AuthContext.Provider value={value}>
				{children}
			</AuthContext.Provider>
		</>
	);
};
