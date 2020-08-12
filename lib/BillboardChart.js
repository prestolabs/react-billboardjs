"use strict";

exports.__esModule = true;
exports.default = exports.updateChart = exports.unloadData = exports.redraw = exports.loadData = exports.getInstances = exports.generateChart = exports.exportChart = exports.destroyChart = exports.config = exports.componentWillUnmount = exports.componentWillUpdate = exports.shouldComponentUpdate = exports.componentDidMount = void 0;

var _shallowEqual = _interopRequireDefault(require("fbjs/lib/shallowEqual"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactParm = require("react-parm");

var _bb = _interopRequireDefault(require("./bb"));

var _shapes = require("./shapes");

var _createComponent;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _React$version$split$ = _react.default.version.split('.').map(function (section) {
  return parseInt(section, 10);
}),
    MAJOR_VERSION = _React$version$split$[0],
    MINOR_VERSION = _React$version$split$[1];

var COMPONENT_WILL_UPDATE_NAME = MAJOR_VERSION >= 16 && MINOR_VERSION >= 3 || MAJOR_VERSION >= 17 ? 'UNSAFE_componentWillUpdate' : 'componentWillUpdate';
/**
 * @function componentDidMount
 *
 * @description
 * on mount, update the chart based on props
 +
 * @param {Object} props the props passed to the component
 * @param {function} updateChart the method to update the chart
 * @returns {void}
 */

var componentDidMount = function componentDidMount(_ref) {
  var props = _ref.props,
      updateChart = _ref.updateChart;
  return requestAnimationFrame(function () {
    return updateChart(props);
  });
};
/**
 * @function shouldComponentUpdate
 *
 * @description
 * if the component is pure, base the update on whether props and context have changed
 *
 * @param {Object} context the instance context
 * @param {Object} props the instance props
 * @param {Object} nextProps the next props
 * @param {Object} nextStateIgnored the next state
 * @param {Object} nextContext the next context
 * @returns {boolean} should the component update
 */


exports.componentDidMount = componentDidMount;

var shouldComponentUpdate = function shouldComponentUpdate(_ref2, _ref3) {
  var context = _ref2.context,
      props = _ref2.props;
  var nextProps = _ref3[0],
      nextContext = _ref3[2];
  return nextProps.isPure ? !(0, _shallowEqual.default)(props, nextProps) || !(0, _shallowEqual.default)(context, nextContext) : true;
};
/**
 * @function componentWillUpdate
 *
 * @description
 * when the component will update, update the chart with the new props
 *
 * @param {function} updateChart the method to update the chart
 * @param {Object} nextProps the next props
 * @returns {void}
 */


exports.shouldComponentUpdate = shouldComponentUpdate;

var componentWillUpdate = function componentWillUpdate(_ref4, _ref5) {
  var updateChart = _ref4.updateChart;
  var nextProps = _ref5[0];
  return updateChart(nextProps);
};
/**
 * @function componentWillUnmount
 *
 * @description
 * prior to unmount, destroy the chart
 *
 * @param {function} destroyChart the method to destroy the chart
 * @returns {void}
 */


exports.componentWillUpdate = componentWillUpdate;

var componentWillUnmount = function componentWillUnmount(_ref6) {
  var destroyChart = _ref6.destroyChart;
  return destroyChart();
};
/**
 * @function config
 *
 * @description
 * get or set the config on the chart
 *
 * @param {BB} chart the chart instance
 * @param {Array<any>} args the args to call config with
 * @returns {void}
 */


exports.componentWillUnmount = componentWillUnmount;

var config = function config(_ref7, args) {
  var chart = _ref7.chart;
  return chart && chart.config.apply(chart, args);
};
/**
 * @function destroyChart
 *
 * @description
 * destroy the chart and set the ref to null
 *
 * @param {ReactComponent} instance the component instance
 */


exports.config = config;

var destroyChart = function destroyChart(instance) {
  if (instance.chart) {
    try {
      instance.chart.destroy();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Internal billboard.js error', error);
    }
  }

  instance.chart = null;
};
/**
 * @function exportChart
 *
 * @description
 * export the chart if it exists
 *
 * @param {BB} chart the chart instance
 * @param {string} mimeType the mimetype of the image
 * @param {function} callback the callback with the data URL
 * @returns {void}
 */


exports.destroyChart = destroyChart;

var exportChart = function exportChart(_ref8, _ref9) {
  var chart = _ref8.chart;
  var mimeType = _ref9[0],
      callback = _ref9[1];
  return chart && chart.export(mimeType, callback);
};
/**
 * @function generateChart
 *
 * @description
 * generate the chart based on the props passed
 *
 * @param {HTMLElement} chartElement the element to bind the chart to
 * @param {Object} props the props passed to the instance
 * @returns {Object} the chart instance that was generated
 */


exports.exportChart = exportChart;

var generateChart = function generateChart(_ref10) {
  var chartElement = _ref10.chartElement,
      _ref10$props = _ref10.props,
      classNameIgnored = _ref10$props.className,
      isPureIgnored = _ref10$props.isPure,
      styleIgnored = _ref10$props.style,
      unloadBeforeLoadIgnored = _ref10$props.unloadBeforeLoad,
      config = _objectWithoutPropertiesLoose(_ref10$props, ["className", "isPure", "style", "unloadBeforeLoad"]);

  return (0, _bb.default)().generate(_extends({
    bindto: chartElement
  }, config));
};
/**
 * @function getInstances
 *
 * @description
 * get all chart instances created by billboard
 *
 * @returns {Array<Object>} the array of chart instances
 */


exports.generateChart = generateChart;

var getInstances = function getInstances() {
  return (0, _bb.default)().instance;
};
/**
 * @function loadData
 *
 * @description
 * load new data to the existing chart
 *
 * @param {BB} chart the chart instance
 * @param {Object} data the data to load
 * @returns {void}
 */


exports.getInstances = getInstances;

var loadData = function loadData(_ref11, _ref12) {
  var chart = _ref11.chart;
  var data = _ref12[0];
  return chart && chart.load(data);
};
/**
 * @function redraw
 *
 * @description
 * trigger a redraw of the chart
 *
 * @returns {void}
 */


exports.loadData = loadData;

var redraw = function redraw(_ref13) {
  var chart = _ref13.chart;
  return chart && chart.flush();
};
/**
 * @function unloadData
 *
 * @description
 * unload data from the existing chart
 *
 * @param {BB} chart the chart instance
 * @param {Object} data the data to unload
 * @returns {void}
 */


exports.redraw = redraw;

var unloadData = function unloadData(_ref14, _ref15) {
  var chart = _ref14.chart;
  var data = _ref15[0];
  return chart && chart.unload(data);
};
/**
 * @function updateChart
 *
 * @description
 * update the chart with the new data
 *
 * @param {ReactComponent} instance the component instance
 * @param {Object} props the props to update the chart with
 */


exports.unloadData = unloadData;

var updateChart = function updateChart(instance, _ref16) {
  var props = _ref16[0];
  var generateChart = instance.generateChart,
      loadData = instance.loadData;
  var data = props.data,
      unloadBeforeLoad = props.unloadBeforeLoad;

  if (!instance.chart) {
    instance.chart = generateChart(props);
  }

  loadData(unloadBeforeLoad ? _extends({}, data, {
    unload: true
  }) : data);
};

exports.updateChart = updateChart;

var BillboardChart = function BillboardChart(_ref17, instance) {
  var className = _ref17.className,
      domProps = _ref17.domProps,
      style = _ref17.style;
  return _react.default.createElement("div", _extends({
    className: className,
    style: style
  }, domProps, {
    ref: (0, _reactParm.createElementRef)(instance, 'chartElement')
  }));
};

BillboardChart.displayName = 'BillboardChart';
BillboardChart.propTypes = {
  area: _shapes.AREA_SHAPE,
  axis: _shapes.AXIS_SHAPE,
  bar: _shapes.BAR_SHAPE,
  className: _propTypes.default.string,
  clipPath: _propTypes.default.bool,
  color: _shapes.COLOR_SHAPE,
  data: _shapes.DATA_SHAPE.isRequired,
  domProps: _propTypes.default.object,
  donut: _shapes.DONUT_SHAPE,
  gauge: _shapes.GAUGE_SHAPE,
  grid: _shapes.GRID_SHAPE,
  interaction: _shapes.INTERACTION_SHAPE,
  isPure: _propTypes.default.bool,
  legend: _shapes.LEGEND_SHAPE,
  line: _shapes.LINE_SHAPE,
  onafterinit: _propTypes.default.func,
  onbeforeinit: _propTypes.default.func,
  oninit: _propTypes.default.func,
  onmouseout: _propTypes.default.func,
  onmouseover: _propTypes.default.func,
  onrendered: _propTypes.default.func,
  onresize: _propTypes.default.func,
  onresized: _propTypes.default.func,
  padding: _shapes.PADDING_SHAPE,
  pie: _shapes.PIE_SHAPE,
  point: _shapes.POINT_SHAPE,
  radar: _shapes.RADAR_SHAPE,
  regions: _propTypes.default.arrayOf(_shapes.REGION_SHAPE),
  resize: _shapes.RESIZE_SHAPE,
  size: _shapes.SIZE_SHAPE,
  spline: _shapes.SPLINE_SHAPE,
  style: _propTypes.default.object,
  subchart: _shapes.SUBCHART_SHAPE,
  svg: _shapes.SVG_SHAPE,
  title: _shapes.TITLE_SHAPE,
  tooltip: _shapes.TOOLTIP_SHAPE,
  transition: _shapes.TRANSITION_SHAPE,
  unloadBeforeLoad: _propTypes.default.bool,
  zoom: _shapes.ZOOM_SHAPE
};
BillboardChart.defaultProps = {
  isPure: false,
  unloadBeforeLoad: false
};
BillboardChart.getInstances = getInstances;

var _default = (0, _reactParm.createComponent)(BillboardChart, (_createComponent = {}, _createComponent[COMPONENT_WILL_UPDATE_NAME] = componentWillUpdate, _createComponent.chart = null, _createComponent.chartElement = null, _createComponent.componentDidMount = componentDidMount, _createComponent.componentWillUnmount = componentWillUnmount, _createComponent.config = config, _createComponent.destroyChart = destroyChart, _createComponent.exportChart = exportChart, _createComponent.generateChart = generateChart, _createComponent.loadData = loadData, _createComponent.redraw = redraw, _createComponent.shouldComponentUpdate = shouldComponentUpdate, _createComponent.unloadData = unloadData, _createComponent.updateChart = updateChart, _createComponent));

exports.default = _default;