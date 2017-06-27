import React from 'react';
import { translate } from 'react-i18next';

function Component () {
  return <p></p>
}

export default translate('view', { wait: true })(Component);
