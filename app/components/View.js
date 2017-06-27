import React from 'react';
import { translate, Interpolate } from 'react-i18next';
import AnotherComponent from './AnotherComponent';
import YetAnotherComponent from './YetAnotherComponent';
import i18n from '../i18n';

@translate(['view', 'nav'], { wait: true })
class TranslatableView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: true });
    }, 3000);
  }

  render() {
    const { t } = this.props;
    const { show } = this.state;

    let interpolateComponent = <strong>"a interpolated component"</strong>;
    const toggle = lng => i18n.changeLanguage(lng);

    return (
      <div>
        <h1>{t('common:appName')}</h1>
        <button onClick={() => toggle('ru')}>{t('nav:rus')}</button>
        <button onClick={() => toggle('en')}>{t('nav:en')}</button>
        <button onClick={() => toggle('ukr')}>{t('nav:ukr')}</button>
        <h2>{t('common:entrance')} Quickskills 2.0</h2>
        {
          show && <AnotherComponent />
        }
        <YetAnotherComponent />
        <Interpolate parent='p' i18nKey='common:interpolateSample' value='"some value in props"' component={interpolateComponent} up='something to uppercase' />

      </div>
    )
  }
}

export default TranslatableView;
