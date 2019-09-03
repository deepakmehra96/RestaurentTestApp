import React from 'react';
import { Dropdown, Button ,ButtonGroup} from 'react-bootstrap'

class DropdownComp extends React.Component {
    constructor(){
        super()
        this.state ={
            defaultTitle : 'Select Restaurent'
        }
    }
    handleSelect(val){
        this.props.selectedValue(val)
        this.setState({ defaultTitle :val.title })
    }

    render() {
        let { defaultTitle } = this.state
        return (
            <div>
                <Dropdown  as={ButtonGroup}>
                    <Button size="sm" variant="primary">{defaultTitle}</Button>
                    <Dropdown.Toggle size="sm" variant="primary"  />
                    <Dropdown.Menu size="sm">
                        {
                            this.props.items.map((val, index) => {
                                return (
                                    <Dropdown.Item onSelect={() => this.handleSelect(val)} key={index}>{val.title}</Dropdown.Item>
                                )
                            })
                        }
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        );
    }
}

export default DropdownComp
