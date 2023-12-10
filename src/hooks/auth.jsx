import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api";

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState("");

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      localStorage.setItem("@whatevernotes:user", JSON.stringify(user));
      localStorage.setItem("@whatevernotes:token", token);

      api.defaults.headers.common["Authorization"] = `Bears ${token}`;

      setData({ user, token });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não Foi possivel entrar,Volte mais tarde!");
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@whatevernotes:token");
    localStorage.removeItem("@whatevernotes:user");

    setData({});
  }
  async function updateProfile({ user, avatarFile }) {
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatarFile);
        
        const response = await api.patch("/users/avatar",fileUploadForm);
        user.avatar = response.data.avatar;
      }

      await api.put("/users", user);
      localStorage.setItem("@whatevernotes:user", JSON.stringify(user));

      setData({ user, token: data.token });
      alert("Perfil atualizado com sucesso");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não Foi possivel entrar,Volte mais tarde!");
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@whatevernotes:token");
    const user = localStorage.getItem("@whatevernotes:user");

    setData({});

    if (token && user) {
      api.defaults.headers.common["Authorization"] = `Bears ${token}`;

      setData({
        token,
        user: JSON.parse(user),
      });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ signIn, signOut, user: data.user, updateProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
}
function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
