
const Table = ({ columns }: { columns: { header: string, accessor: string, className?: string }[] }) => {
    return (
        <table className="w-full mt-4 ">
            <thead>
                <tr className="text-left text-gray-500 text-sm">
                    {columns.map((c) => (
                        <th key={c.accessor}>{c.header}</th>
                    ))}
                </tr>
            </thead>
              {/* <tbody>{data.map((item) => renderRow(item))}</tbody> */}
        </table>
    )
}

export default Table