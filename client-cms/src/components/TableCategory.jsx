
export default function TableCategory({ product, index }) {
    function formatDate(date) {
        let newDate = new Date(date)
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        };
       return newDate.toLocaleDateString('id-ID', options)
    }
    return (
        <> 
            <tbody>
                {/* row 1 */}
                <tr>
                    <td>
                        {index + 1}
                    </td>
                    <td>
                        <div className="flex items-center gap-3">
                        <div className="avatar">
                        </div>
                        <div>
                        <div className="font-bold"></div>
                        <div className="text-sm opacity-50">{product.name} </div>
                        </div>
                    </div>
                    </td>
                    <td>
                        <div>{formatDate(product.createdAt)}</div>
                    </td>
                    <td></td>

                </tr>
            </tbody>
        </>
    )
}