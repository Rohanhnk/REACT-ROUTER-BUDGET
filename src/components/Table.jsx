import ExpenseItem from "./ExpenseItem"

const Table = ({expenses}) => {
    retrun (
        <div className="table">
            <table>
                <thead>
                    <tr>
                        {
                            ["name","Amount","Date"].map((i, index) => (
                                <th key={index}>{i}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        expenses.map((expense)=> (
                            <tr key={expense.id}>
                                {expense.name}
                                <ExpenseItem expense={expense}/>
                                </tr>
                        ))
                    }
                </tbody>
            </table>
            
        </div>
    )
}

export default