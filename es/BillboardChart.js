var _createComponent;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// external dependencies
import shallowEqual from 'fbjs/lib/shallowEqual';
import PropTypes from 'prop-types';
import React from 'react';
import { createComponent, createElementRef } from 'react-parm'; // billboard

import bb from './bb'; // shapes

import { AREA_SHAPE, AXIS_SHAPE, BAR_SHAPE, COLOR_SHAPE, DATA_SHAPE, DONUT_SHAPE, GAUGE_SHAPE, GRID_SHAPE, INTERACTION_SHAPE, LEGEND_SHAPE, LINE_SHAPE, PADDING_SHAPE, PIE_SHAPE, POINT_SHAPE, RADAR_SHAPE, REGION_SHAPE, RESIZE_SHAPE, SIZE_SHAPE, SPLINE_SHAPE, SUBCHART_SHAPE, SVG_SHAPE, TITLE_SHAPE, TOOLTIP_SHAPE, TRANSITION_SHAPE, ZOOM_SHAPE } from './shapes';

var _React$version$split$ = React.version.split('.').map(function (section) {
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

export var componentDidMount = function componentDidMount(_ref) {
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

export var shouldComponentUpdate = function shouldComponentUpdate(_ref2, _ref3) {
  var context = _ref2.context,
      props = _ref2.props;
  var nextProps = _ref3[0],
      nextContext = _ref3[2];
  return nextProps.isPure ? !shallowEqual(props, nextProps) || !shallowEqual(context, nextContext) : true;
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

export var componentWillUpdate = function componentWillUpdate(_ref4, _ref5) {
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

export var componentWillUnmount = function componentWillUnmount(_ref6) {
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

export var config = function config(_ref7, args) {
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

export var destroyChart = function destroyChart(instance) {
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

export var exportChart = function exportChart(_ref8, _ref9) {
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

export var generateChart = function generateChart(_ref10) {
  var chartElement = _ref10.chartElement,
      _ref10$props = _ref10.props,
      classNameIgnored = _ref10$props.className,
      isPureIgnored = _ref10$props.isPure,
      styleIgnored = _ref10$props.style,
      unloadBeforeLoadIgnored = _ref10$props.unloadBeforeLoad,
      config = _objectWithoutPropertiesLoose(_ref10$props, ["className", "isPure", "style", "unloadBeforeLoad"]);

  return bb().generate(_extends({
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

export var getInstances = function getInstances() {
  return bb().instance;
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

export var loadData = function loadData(_ref11, _ref12) {
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

export var redraw = function redraw(_ref13) {
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

export var unloadData = function unloadData(_ref14, _ref15) {
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

export var updateChart = function updateChart(instance, _ref16) {
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

var BillboardChart = function BillboardChart(_ref17, instance) {
  var className = _ref17.className,
      domProps = _ref17.domProps,
      style = _ref17.style;
  return React.createElement("div", _extends({
    className: className,
    style: style
  }, domProps, {
    ref: createElementRef(instance, 'chartElement')
  }));
};

BillboardChart.displayName = 'BillboardChart';
BillboardChart.propTypes = {
  area: AREA_SHAPE,
  axis: AXIS_SHAPE,
  bar: BAR_SHAPE,
  className: PropTypes.string,
  clipPath: PropTypes.bool,
  color: COLOR_SHAPE,
  data: DATA_SHAPE.isRequired,
  domProps: PropTypes.object,
  donut: DONUT_SHAPE,
  gauge: GAUGE_SHAPE,
  grid: GRID_SHAPE,
  interaction: INTERACTION_SHAPE,
  isPure: PropTypes.bool,
  legend: LEGEND_SHAPE,
  line: LINE_SHAPE,
  onafterinit: PropTypes.func,
  onbeforeinit: PropTypes.func,
  oninit: PropTypes.func,
  onmouseout: PropTypes.func,
  onmouseover: PropTypes.func,
  onrendered: PropTypes.func,
  onresize: PropTypes.func,
  onresized: PropTypes.func,
  padding: PADDING_SHAPE,
  pie: PIE_SHAPE,
  point: POINT_SHAPE,
  radar: RADAR_SHAPE,
  regions: PropTypes.arrayOf(REGION_SHAPE),
  resize: RESIZE_SHAPE,
  size: SIZE_SHAPE,
  spline: SPLINE_SHAPE,
  style: PropTypes.object,
  subchart: SUBCHART_SHAPE,
  svg: SVG_SHAPE,
  title: TITLE_SHAPE,
  tooltip: TOOLTIP_SHAPE,
  transition: TRANSITION_SHAPE,
  unloadBeforeLoad: PropTypes.bool,
  zoom: ZOOM_SHAPE
};
BillboardChart.defaultProps = {
  isPure: false,
  unloadBeforeLoad: false
};
BillboardChart.getInstances = getInstances;
export default createComponent(BillboardChart, (_createComponent = {}, _createComponent[COMPONENT_WILL_UPDATE_NAME] = componentWillUpdate, _createComponent.chart = null, _createComponent.chartElement = null, _createComponent.componentDidMount = componentDidMount, _createComponent.componentWillUnmount = componentWillUnmount, _createComponent.config = config, _createComponent.destroyChart = destroyChart, _createComponent.exportChart = exportChart, _createComponent.generateChart = generateChart, _createComponent.loadData = loadData, _createComponent.redraw = redraw, _createComponent.shouldComponentUpdate = shouldComponentUpdate, _createComponent.unloadData = unloadData, _createComponent.updateChart = updateChart, _createComponent));