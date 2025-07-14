import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({ data, onDelete, onTogleProp }) => {

    const elements = data.map(item => {
        const { id, ...itemProps } = item;
        return (
            <EmployeesListItem
                key={id}
                {...itemProps}
                onDelete={() => onDelete(id)}
                onTogleProp={(e) => onTogleProp(id, e.currentTarget.getAttribute('data-toggle'))}
            // onTogleIncrease={() => onTogleIncrease(id)}
            // onTogleRise={() => onTogleRise(id)}
            />
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;