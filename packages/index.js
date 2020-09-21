import THButton from "./Button";
import THIcon from "./Icon";
import THInput from "./Input";
import THCard from "./Card";
import THRadio from "./Radio";
import THModal from "./Modal";
import THCheckbox from "./Checkbox";
import THCheckboxGroup from './Checkbox'
import THMessage from './Message'
import THBackTop from './BackTop'
import THTooltip from "./Tooltip";
import THTag from './Tag';
import THSelect from './Select'
// import THSwitch from './Switch'
import THLoading from './Loading'

export default {
  install(Vue) {
    Vue.use(THButton);
    Vue.use(THIcon);
    Vue.use(THInput);
    Vue.use(THCard);
    Vue.use(THRadio);
    Vue.use(THModal);
    Vue.use(THCheckbox);
    Vue.use(THCheckboxGroup);
    Vue.use(THMessage);
    Vue.use(THBackTop);
    Vue.use(THTooltip);
    Vue.use(THTag);
    Vue.use(THSelect);
    // Vue.use(THSwitch);
    Vue.use(THLoading);
  },
};