import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    api.get("transactions").then((response) => {
      console.log(response.data);
    });
  }, []);
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit"> + R$500,00</td>
            <td>Desenvolvimento</td>
            <td>10/10/2014</td>
          </tr>
          <tr>
            <td>Uber</td>
            <td className="withdraw"> - R$500,00</td>
            <td>Desenvolvimento</td>
            <td>10/10/2014</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
