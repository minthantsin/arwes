import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Animation from '../Animation';

export default function Line (props) {

  const { theme, classes, animate, show, layer, className, ...etc } = props;
  const cls = cx(classes.root, className);

  return (
    <Animation animate={animate} show={show} timeout={theme.animTime}>
      {anim => (
        <div className={cx(cls, classes[anim.status])} {...etc}>
          <div className={classes.line} />
          <div className={classes.left} />
          <div className={classes.right} />
        </div>
      )}
    </Animation>
  );
}

Line.propTypes = {
  theme: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  animate: PropTypes.bool,
  show: PropTypes.bool,
  layer: PropTypes.oneOf(['primary', 'secondary', 'header', 'control', 'success', 'alert', 'disabled']),
};

Line.defaultProps = {
  animate: false,
  show: true,
  layer: 'primary',
};
