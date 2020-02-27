import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Segment } from 'semantic-ui-react'

import ScrollableAnchor from 'react-scrollable-anchor'

class Section extends Component {

    render() {
        const { id, children, ...props } = this.props;

        return (
            <Segment className="animate-up segment" {...props}>
                <ScrollableAnchor id={id}>
                    <div>{children}</div>
                </ScrollableAnchor>
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