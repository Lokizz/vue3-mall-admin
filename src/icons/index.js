import SvgIcon from '@/components/SvgIcon'

const sysRequired = require.context('./svg', false, /\.svg$/)
sysRequired.keys().forEach((item) => sysRequired(item))

export default (app) => {
  app.component('SvgIcon', SvgIcon)
}
