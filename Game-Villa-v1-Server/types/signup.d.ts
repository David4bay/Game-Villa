interface SignUpTypes {
    username: string;
    password: string;
    email: string;
    age: number;
}

export type SignUpInfo = Pick<SignUpTypes, 'username' | 'password' | 'email' | 'age'>