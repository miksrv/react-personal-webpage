import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import PropTypes from 'prop-types'

class Section extends Component {

    render() {
        const { id, children, ...props } = this.props;

        return (
            <Segment className="animate-up" {...props}>
                {children}
            </Segment>
        );
  }
}

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ])
};

Section.defaultProps = {
  children: null
};

export default Section