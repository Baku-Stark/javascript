import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { useAuth } from "../context/useAuth";

import styles from './_pages.module.css'

export function SignIn(){
    const navigate = useNavigate();
    
    const { signin }: any = useAuth();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        if (!email || !senha) {
        setError("Preencha todos os campos");
        return;
        }

        const res = signin(email, senha);

        if (res) {
        setError(res);
        return;
        }

        navigate("/home");
    };
    return(
        <div className={styles.form}>
            <label>L O G I N</label>
            <div className={styles.block}>
                <Input
                    type="email"
                    value={email}
                    onChange={(e: any) => [setEmail(e.target.value), setError("")]}
                    placeholder="Digite seu E-mail"
                />
                <Input
                    type="password"
                    value={senha}
                    onChange={(e: any) => [setSenha(e.target.value), setError("")]}
                    placeholder="Digite sua senha"
                />
                <span className={styles.error_message}>{error}</span>
                {/* ================= */}
                <Button
                    Text="Cadastrar-se"
                    onClick={handleLogin}
                />
                <span className={styles.sign_in}>
                    Não possui uma conta? <Link to={"/sign_up"}>&nbsp;Registre-se</Link>
                </span>
            </div>
        </div>
    )
}