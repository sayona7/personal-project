import React, { Component } from 'react';
import "./calendar.css";

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <table>
                    <caption>Calendar</caption>
                    <thead>
                        <tr>
                        <th>Column 1</th>
                        <th>Column 2</th>
                        <th>Column 3</th>
                        <th>Column 4</th>
                        <th>Column 5</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Cell 1</td>
                        <td>Cell 2</td>
                        <td>Cell 3</td>
                        <td>Cell 4</td>
                        <td>Cell 5</td>
                        </tr>
                        <tr>
                        <td>Cell 6</td>
                        <td>Cell 7</td>
                        <td>Cell 8</td>
                        <td>Cell 9</td>
                        <td>Cell 10</td>
                        </tr>
                        <tr>
                        <td>Cell 11</td>
                        <td>Cell 12</td>
                        <td>Cell 13</td>
                        <td>Cell 14</td>
                        <td>Cell 15</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                        <th>Column 1</th>
                        <th>Column 2</th>
                        <th>Column 3</th>
                        <th>Column 4</th>
                        <th>Column 5</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
         );
    }
}
 
export default Calendar;