import "./Table.css";

export default function Table(props) {
  return (
    <table class="table table-striped">
      <thead>
        <tr>
          <th>{ props.tableName}</th>
          <th>Header 2</th>
          <th>Header 3</th>
          <th>Header 3</th>
          <th>Header 3</th>
          <th>Header 3</th>
          <th>Header 3</th>
          <th>Header 3</th>
          <th>Header 3</th>
          <th>Header 3</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <th>Footer 1</th>
          <th>Footer 2</th>
          <th>Footer 3</th>
          <th>Footer 3</th>
          <th>Footer 3</th>
          <th>Footer 3</th>
          <th>Footer 3</th>
          <th>Footer 3</th>
          <th>Footer 3</th>
          <th>Footer 3</th>

        </tr>
      </tfoot>
      <tbody>
        <tr>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>

        </tr>
        <tr>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
      </tbody>
    </table>
  );
}
