import React from "react";
import { Dropdown } from "react-bootstrap";

interface NestedDropdownProps {
  title: string;
  children: React.ReactNode;
}

export default class NestedDropdown extends React.Component<NestedDropdownProps> {
  render() {
    const { title, children } = this.props;
    return (
      <Dropdown.Item>
        <Dropdown variant="primary" drop="end" autoClose="outside">
          <Dropdown.Toggle>{title}</Dropdown.Toggle>
          <Dropdown.Menu>
            {children}
          </Dropdown.Menu>
        </Dropdown>
      </Dropdown.Item>
    );
  }
}
