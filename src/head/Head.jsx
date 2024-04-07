import React from 'react';

import { Helmet } from 'react-helmet';

import { getConfig } from '@edx/frontend-platform';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';

import useGetConfig from '../hooks/useGetConfig';
import messages from './messages';

const Head = ({ intl }) => {
  const {
    platformName,
  } = useGetConfig();

  return (
    <Helmet>
      <title>
        {intl.formatMessage(messages['discussions.page.title'], { siteName: platformName || getConfig().siteName })}
      </title>
    </Helmet>
  );
};

Head.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(Head);
