const makeTable = async (data) => {
    return (
        `<table>
            ${await generateRows(data)}
        </table>`);
}

const generateRows = async (data) => {
    const table = [];
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            table.push(
                `<tr>
                    <th>${key}:</th>
                    <td>${data[key]}</td>
                </tr>`
            )
        }
    }
    return table;
}

module.exports = {
    makeTable
}