import React, { useState } from 'react'
import { Form, Input, Button, Checkbox, Select, message } from 'antd'
import Cards from '../../components/student-cards/Cards'

function Student() {
    const [filter, setfilter] = useState('Java-Script')
    const programmingLangArr: any = { react: 'React', angular: 'Angular', bootstrap: 'Bootstrap', mongodb: 'MongoDB', typescript: 'Type-Script', python: 'Python', nodejs: 'NodeJS', c: 'C', css: 'CSS', html: 'HTML', 'c#': 'C#', java: 'Java', 'c++': 'C++', php: 'PHP' }
    const { Option } = Select;

    function onChange(value: any) {
        setfilter(value)
        console.log(filter)
    }
    function onSearch(val: string) {
        console.log('search:', val);
    }
    return (
        <div>
            <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select a person"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option: any) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
            >
                <Option value="Java-Script">Java-Script</Option>
                <Option value="Bootstrap">Bootstrap</Option>
                <Option value="React">React</Option>
            </Select>

            <Cards querry={filter} />

        </div>
    )
}

export default Student;
