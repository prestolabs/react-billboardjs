"use strict";

exports.__esModule = true;
exports.ZOOM_SHAPE = exports.TRANSITION_SHAPE = exports.TOOLTIP_SHAPE = exports.TITLE_SHAPE = exports.SVG_SHAPE = exports.SUBCHART_SHAPE = exports.SPLINE_SHAPE = exports.SIZE_SHAPE = exports.RESIZE_SHAPE = exports.REGION_SHAPE = exports.RADAR_SHAPE = exports.POINT_SHAPE = exports.PIE_SHAPE = exports.PADDING_SHAPE = exports.LEGEND_SHAPE = exports.INTERACTION_SHAPE = exports.GRID_SHAPE = exports.LINES_SHAPE = exports.GAUGE_SHAPE = exports.DONUT_SHAPE = exports.DATA_SHAPE = exports.ORDER_SHAPE = exports.LINE_SHAPE = exports.COLOR_SHAPE = exports.BAR_SHAPE = exports.AXIS_SHAPE = exports.AXIS_TICK_SHAPE = exports.AXIS_Y_PADDING_SHAPE = exports.AXIS_TYPE_SHAPE = exports.LABEL_SHAPE = exports.AREA_SHAPE = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// external dependencies
var AREA_SHAPE = _propTypes.default.shape({
  above: _propTypes.default.bool,
  zerobased: _propTypes.default.bool
});

exports.AREA_SHAPE = AREA_SHAPE;

var LABEL_SHAPE = _propTypes.default.oneOfType([_propTypes.default.shape({
  position: _propTypes.default.oneOf(['inner-bottom', 'inner-center', 'inner-left', 'inner-middle', 'inner-right', 'inner-top', 'outer-bottom', 'outer-center', 'outer-left', 'outer-middle', 'outer-right', 'outer-top']),
  text: _propTypes.default.string
}), _propTypes.default.string]);

exports.LABEL_SHAPE = LABEL_SHAPE;

var AXIS_TYPE_SHAPE = _propTypes.default.oneOf(['category', 'indexed', 'timeseries']);

exports.AXIS_TYPE_SHAPE = AXIS_TYPE_SHAPE;

var AXIS_Y_PADDING_SHAPE = _propTypes.default.shape({
  bottom: _propTypes.default.number,
  top: _propTypes.default.number
});

exports.AXIS_Y_PADDING_SHAPE = AXIS_Y_PADDING_SHAPE;

var AXIS_TICK_SHAPE = _propTypes.default.shape({
  count: _propTypes.default.number,
  format: _propTypes.default.func,
  text: _propTypes.default.shape({
    position: _propTypes.default.shape({
      x: _propTypes.default.number,
      y: _propTypes.default.number
    })
  }),
  values: _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.instanceOf(Date)]))
});

exports.AXIS_TICK_SHAPE = AXIS_TICK_SHAPE;

var AXIS_SHAPE = _propTypes.default.shape({
  rotated: _propTypes.default.bool,
  x: _propTypes.default.shape({
    categories: _propTypes.default.arrayOf(_propTypes.default.string),
    clipPath: _propTypes.default.bool,
    extent: _propTypes.default.arrayOf(_propTypes.default.arrayOf(_propTypes.default.number)),
    height: _propTypes.default.number,
    label: LABEL_SHAPE,
    localtime: _propTypes.default.bool,
    max: _propTypes.default.number,
    min: _propTypes.default.number,
    padding: _propTypes.default.shape({
      left: _propTypes.default.number,
      right: _propTypes.default.number
    }),
    show: _propTypes.default.bool,
    tick: _propTypes.default.shape({
      centered: _propTypes.default.bool,
      count: _propTypes.default.number,
      culling: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.shape({
        max: _propTypes.default.number
      })]),
      fit: _propTypes.default.bool,
      format: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.string]),
      multiline: _propTypes.default.bool,
      outer: _propTypes.default.bool,
      rotate: _propTypes.default.number,
      tooltip: _propTypes.default.bool,
      values: _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.instanceOf(Date)])),
      width: _propTypes.default.number
    }),
    type: AXIS_TYPE_SHAPE
  }),
  y: _propTypes.default.shape({
    center: _propTypes.default.number,
    default: _propTypes.default.arrayOf(_propTypes.default.number),
    format: _propTypes.default.func,
    inner: _propTypes.default.bool,
    inverted: _propTypes.default.bool,
    label: LABEL_SHAPE,
    max: _propTypes.default.number,
    min: _propTypes.default.number,
    padding: AXIS_Y_PADDING_SHAPE,
    show: _propTypes.default.bool,
    tick: AXIS_TICK_SHAPE,
    type: AXIS_TYPE_SHAPE
  }),
  y2: _propTypes.default.shape({
    center: _propTypes.default.number,
    default: _propTypes.default.arrayOf(_propTypes.default.number),
    inner: _propTypes.default.bool,
    inverted: _propTypes.default.bool,
    label: LABEL_SHAPE,
    max: _propTypes.default.number,
    min: _propTypes.default.number,
    padding: AXIS_Y_PADDING_SHAPE,
    show: _propTypes.default.bool,
    tick: AXIS_TICK_SHAPE
  })
});

exports.AXIS_SHAPE = AXIS_SHAPE;

var BAR_SHAPE = _propTypes.default.shape({
  padding: _propTypes.default.number,
  radius: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
    ratio: _propTypes.default.number
  })]),
  width: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
    max: _propTypes.default.number,
    ratio: _propTypes.default.number
  })]),
  zerobased: _propTypes.default.bool
});

exports.BAR_SHAPE = BAR_SHAPE;

var COLOR_SHAPE = _propTypes.default.shape({
  pattern: _propTypes.default.arrayOf(_propTypes.default.string),
  threshold: _propTypes.default.shape({
    max: _propTypes.default.number,
    unit: _propTypes.default.string,
    value: _propTypes.default.string
  })
});

exports.COLOR_SHAPE = COLOR_SHAPE;

var LINE_SHAPE = _propTypes.default.shape({
  classes: _propTypes.default.arrayOf(_propTypes.default.string),
  connectNull: _propTypes.default.bool,
  point: _propTypes.default.oneOf([_propTypes.default.arrayOf(_propTypes.default.string), _propTypes.default.bool]),
  step: _propTypes.default.shape({
    type: _propTypes.default.oneOf(['step', 'step-after', 'step-before'])
  })
});

exports.LINE_SHAPE = LINE_SHAPE;

var ORDER_SHAPE = _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.oneOf(['asc', 'desc', '', null])]);

exports.ORDER_SHAPE = ORDER_SHAPE;

var DATA_SHAPE = _propTypes.default.shape({
  axes: _propTypes.default.object,
  classes: _propTypes.default.object,
  color: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.shape({
    pattern: _propTypes.default.arrayOf(_propTypes.default.string),
    tiles: _propTypes.default.func
  })]),
  colors: _propTypes.default.object,
  columns: _propTypes.default.arrayOf(_propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.number), _propTypes.default.number, _propTypes.default.shape({
    height: _propTypes.default.number,
    low: _propTypes.default.number,
    mid: _propTypes.default.number
  }), _propTypes.default.string]))),
  empty: _propTypes.default.shape({
    label: LABEL_SHAPE
  }),
  groups: _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.string), _propTypes.default.string])),
  hide: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.arrayOf(_propTypes.default.string)]),
  json: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.object), _propTypes.default.object]),
  keys: _propTypes.default.shape({
    value: _propTypes.default.arrayOf(_propTypes.default.string),
    x: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.string), _propTypes.default.string]),
    y: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.string), _propTypes.default.string]),
    y2: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.string), _propTypes.default.string])
  }),
  labels: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.shape({
    format: _propTypes.default.func,
    position: _propTypes.default.shape({
      x: _propTypes.default.number,
      y: _propTypes.default.number
    })
  })]),
  line: LINE_SHAPE,
  mimeType: _propTypes.default.string,
  names: _propTypes.default.object,
  onclick: _propTypes.default.func,
  onmax: _propTypes.default.func,
  onmin: _propTypes.default.func,
  onout: _propTypes.default.func,
  onover: _propTypes.default.func,
  onselected: _propTypes.default.func,
  onunselected: _propTypes.default.func,
  order: ORDER_SHAPE,
  point: _propTypes.default.shape({
    focus: _propTypes.default.shape({
      expand: _propTypes.default.shape({
        enabled: _propTypes.default.bool,
        r: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.number])
      })
    }),
    pattern: _propTypes.default.arrayOf(_propTypes.default.string),
    r: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.func]),
    select: _propTypes.default.shape({
      r: _propTypes.default.number
    }),
    show: _propTypes.default.bool,
    type: _propTypes.default.oneOf(['circle', 'rectangle'])
  }),
  regions: _propTypes.default.object,
  rows: _propTypes.default.arrayOf(_propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]))),
  selection: _propTypes.default.shape({
    draggable: _propTypes.default.bool,
    enabled: _propTypes.default.bool,
    isselectable: _propTypes.default.bool,
    multiple: _propTypes.default.bool
  }),
  type: _propTypes.default.oneOf(['area', 'area-line-range', 'area-range', 'area-spline', 'area-step', 'bar', 'bubble', 'donut', 'gauge', 'line', 'pie', 'radar', 'scatter', 'spline']),
  types: _propTypes.default.object,
  url: _propTypes.default.string,
  x: _propTypes.default.string,
  xFormat: _propTypes.default.string,
  xLocaltime: _propTypes.default.bool,
  xSort: _propTypes.default.bool,
  xs: _propTypes.default.object
});

exports.DATA_SHAPE = DATA_SHAPE;

var DONUT_SHAPE = _propTypes.default.shape({
  expand: _propTypes.default.bool,
  label: _propTypes.default.shape({
    format: _propTypes.default.func,
    radio: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.number]),
    show: _propTypes.default.bool,
    threshold: _propTypes.default.number
  }),
  padAngle: _propTypes.default.number,
  title: _propTypes.default.string,
  width: _propTypes.default.number
});

exports.DONUT_SHAPE = DONUT_SHAPE;

var GAUGE_SHAPE = _propTypes.default.shape({
  expand: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.shape({
    duration: _propTypes.default.number
  })]),
  fullCircle: _propTypes.default.bool,
  label: _propTypes.default.shape({
    extents: _propTypes.default.func,
    format: _propTypes.default.func,
    show: _propTypes.default.bool
  }),
  max: _propTypes.default.number,
  startingAngle: _propTypes.default.number,
  units: _propTypes.default.string,
  width: _propTypes.default.number
});

exports.GAUGE_SHAPE = GAUGE_SHAPE;

var LINES_SHAPE = _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.shape({
  class: _propTypes.default.string,
  position: _propTypes.default.string,
  text: _propTypes.default.string,
  value: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string, _propTypes.default.instanceOf(Date)])
})), _propTypes.default.bool]);

exports.LINES_SHAPE = LINES_SHAPE;

var GRID_SHAPE = _propTypes.default.shape({
  focus: _propTypes.default.shape({
    show: _propTypes.default.bool
  }),
  lines: _propTypes.default.shape({
    front: _propTypes.default.bool
  }),
  x: _propTypes.default.shape({
    lines: LINES_SHAPE,
    show: _propTypes.default.bool
  }),
  y: _propTypes.default.shape({
    lines: LINES_SHAPE,
    show: _propTypes.default.bool,
    ticks: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.number])
  })
});

exports.GRID_SHAPE = GRID_SHAPE;

var INTERACTION_SHAPE = _propTypes.default.shape({
  brighten: _propTypes.default.bool,
  enabled: _propTypes.default.bool,
  inputType: _propTypes.default.shape({
    mouse: _propTypes.default.bool,
    touch: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.shape({
      preventDefault: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.number])
    })])
  })
});

exports.INTERACTION_SHAPE = INTERACTION_SHAPE;

var LEGEND_SHAPE = _propTypes.default.shape({
  contents: _propTypes.default.shape({
    bindto: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.string]),
    template: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.string])
  }),
  equally: _propTypes.default.bool,
  hide: _propTypes.default.bool,
  inset: _propTypes.default.shape({
    anchor: _propTypes.default.oneOf(['bottom-left', 'bottom-right', 'top-left', 'top-right']),
    step: _propTypes.default.number,
    x: _propTypes.default.number,
    y: _propTypes.default.number
  }),
  item: _propTypes.default.shape({
    onclick: _propTypes.default.func,
    onout: _propTypes.default.func,
    onover: _propTypes.default.func,
    tile: _propTypes.default.shape({
      height: _propTypes.default.number,
      width: _propTypes.default.number
    })
  }),
  padding: _propTypes.default.number,
  position: _propTypes.default.oneOf(['bottom', 'right', 'inset']),
  show: _propTypes.default.bool,
  usePoint: _propTypes.default.bool
});

exports.LEGEND_SHAPE = LEGEND_SHAPE;

var PADDING_SHAPE = _propTypes.default.shape({
  bottom: _propTypes.default.number,
  left: _propTypes.default.number,
  right: _propTypes.default.number,
  top: _propTypes.default.number
});

exports.PADDING_SHAPE = PADDING_SHAPE;

var PIE_SHAPE = _propTypes.default.shape({
  expand: _propTypes.default.bool,
  innerRadius: _propTypes.default.number,
  label: _propTypes.default.shape({
    format: _propTypes.default.func,
    ratio: _propTypes.default.number,
    show: _propTypes.default.bool,
    threshold: _propTypes.default.number
  }),
  padAngle: _propTypes.default.number,
  padding: _propTypes.default.number
});

exports.PIE_SHAPE = PIE_SHAPE;

var POINT_SHAPE = _propTypes.default.shape({
  focus: _propTypes.default.shape({
    expand: _propTypes.default.shape({
      enabled: _propTypes.default.bool,
      r: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.number])
    })
  }),
  r: _propTypes.default.number,
  select: _propTypes.default.shape({
    r: _propTypes.default.number
  }),
  show: _propTypes.default.bool
});

exports.POINT_SHAPE = POINT_SHAPE;

var RADAR_SHAPE = _propTypes.default.shape({
  axis: _propTypes.default.shape({
    line: _propTypes.default.shape({
      show: _propTypes.default.bool
    }),
    max: _propTypes.default.number,
    text: _propTypes.default.shape({
      show: _propTypes.default.bool
    })
  }),
  direction: _propTypes.default.shape({
    clockwise: _propTypes.default.bool
  }),
  level: _propTypes.default.shape({
    depth: _propTypes.default.number,
    show: _propTypes.default.bool,
    text: _propTypes.default.shape({
      format: _propTypes.default.func,
      show: _propTypes.default.bool
    })
  }),
  size: _propTypes.default.shape({
    ratio: _propTypes.default.number
  })
});

exports.RADAR_SHAPE = RADAR_SHAPE;

var REGION_SHAPE = _propTypes.default.shape({
  axis: _propTypes.default.string,
  class: _propTypes.default.string,
  end: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  start: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  style: _propTypes.default.object
});

exports.REGION_SHAPE = REGION_SHAPE;

var RESIZE_SHAPE = _propTypes.default.shape({
  auto: _propTypes.default.bool
});

exports.RESIZE_SHAPE = RESIZE_SHAPE;

var SIZE_SHAPE = _propTypes.default.shape({
  height: _propTypes.default.number,
  width: _propTypes.default.number
});

exports.SIZE_SHAPE = SIZE_SHAPE;

var SPLINE_SHAPE = _propTypes.default.shape({
  interpolation: _propTypes.default.shape({
    type: _propTypes.default.string
  })
});

exports.SPLINE_SHAPE = SPLINE_SHAPE;

var SUBCHART_SHAPE = _propTypes.default.shape({
  onbrush: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.func]),
  show: _propTypes.default.bool,
  size: _propTypes.default.shape({
    height: _propTypes.default.number
  })
});

exports.SUBCHART_SHAPE = SUBCHART_SHAPE;

var SVG_SHAPE = _propTypes.default.shape({
  className: _propTypes.default.string
});

exports.SVG_SHAPE = SVG_SHAPE;

var TITLE_SHAPE = _propTypes.default.shape({
  padding: PADDING_SHAPE,
  position: _propTypes.default.oneOf(['bottom-center', 'bottom-left', 'bottom-right', 'top-center', 'top-left', 'top-right']),
  text: _propTypes.default.string
});

exports.TITLE_SHAPE = TITLE_SHAPE;

var TOOLTIP_SHAPE = _propTypes.default.shape({
  contents: _propTypes.default.func,
  format: _propTypes.default.shape({
    name: _propTypes.default.func,
    title: _propTypes.default.func,
    value: _propTypes.default.func
  }),
  grouped: _propTypes.default.bool,
  linked: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.shape({
    name: _propTypes.default.string
  })]),
  order: ORDER_SHAPE,
  position: _propTypes.default.func,
  show: _propTypes.default.bool
});

exports.TOOLTIP_SHAPE = TOOLTIP_SHAPE;

var TRANSITION_SHAPE = _propTypes.default.shape({
  duration: _propTypes.default.number
});

exports.TRANSITION_SHAPE = TRANSITION_SHAPE;

var ZOOM_SHAPE = _propTypes.default.shape({
  enabled: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.shape({
    type: _propTypes.default.string
  })]),
  extent: _propTypes.default.arrayOf(_propTypes.default.number),
  onzoom: _propTypes.default.func,
  onzoomend: _propTypes.default.func,
  onzoomstart: _propTypes.default.func,
  rescale: _propTypes.default.bool,
  resetButton: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.shape({
    text: _propTypes.default.string
  })]),
  x: _propTypes.default.shape({
    max: _propTypes.default.number,
    min: _propTypes.default.number
  })
});

exports.ZOOM_SHAPE = ZOOM_SHAPE;