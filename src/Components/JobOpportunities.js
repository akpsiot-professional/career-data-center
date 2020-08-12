import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css';
import Table from 'react-bootstrap/Table'


const TEST_STRING = JSON.stringify({
    0: ["james", "king","of","the","universe"],
    1: ["seth", "gorilla","in","the", "jungle"],
    2: ["elliott", "orangutan","in", "the","trees"]
});

class JobOpportunities extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this._getColumns = this._getColumns.bind(this);
        this._getRows = this._getRows.bind(this);
        this._renderColumnHeaders = this._renderColumnHeaders.bind(this);
        this._renderRows = this._renderRows.bind(this);
      }

    _getColumns() {
        return ["word1", "word2", "word3", "word4"];
    }

    _getRows() {
        const resultRows = Object.values(JSON.parse(TEST_STRING));
        return resultRows.map((row) => (
            {
                index: row[0],
                word1: row[1],
                word2: row[2],
                word3: row[3],
                word4: row[4],
            }
        ));
    }

    _renderColumnHeaders() {
        const columns = this._getColumns();
        return (
            <thead>
                <th>index</th>
                {columns.map((columnName) => (
                    <th>{columnName}</th>
                ))}
            </thead>
        );
    }

    _renderRows() {
        const rows = this._getRows();
        return (
            <tbody>
                {rows.map(row => (
                    <tr key={row.index}>
                        <td>{row.index}</td>
                        <td>{row.word1}</td>
                        <td>{row.word2}</td>
                        <td>{row.word3}</td>
                        <td>{row.word4}</td>
                    </tr>
                ))}
            </tbody>
        )
    }

    render() {
        return (
            
            <div>
                
                <Table response ="sm">
                    {this._renderRows()}
                    {this._renderColumnHeaders()}
                </Table>
            </div>
        );
    }
}

export default JobOpportunities;