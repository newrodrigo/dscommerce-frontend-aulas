import "./styles.css";
import { useEffect, useState } from "react";
import { UserDTO } from "../../../models/user";
import * as useService from "../../../services/user-service";

export default function AdminHome() {
  const [user, setUser] = useState<UserDTO>();

  useEffect(() => {
    useService
      .findMe()
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);

  return (
    <main>
      <section id="admin-home-section" className="dsc-container">
        <h2 className="dsc-section-title dsc-mb20">
          Seja bem-vindo à área administrativa {user?.name}
        </h2>
      </section>
    </main>
  );
}
