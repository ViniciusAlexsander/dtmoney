import { Container } from "./styles";

export function TransactionsTable() {
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
            <td className="deposit">R$500,00</td>
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
