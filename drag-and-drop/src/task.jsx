import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  border: 1px solid grey;
  padding: 8px;
  margin-bottom: 8px;
  border-radius: 8px;
`;

export default class Task extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {(provided) => (
          <Container
            {...provided.dragabbleProps}
            {...provided.dragHandleProps}
            innerRef={provided.innerRef}
          >
            {this.props.task.content}
          </Container>
        )}
      </Draggable>
    );
  }
}
