// Generated by BUCKLESCRIPT VERSION 4.0.18, PLEASE EDIT WITH CARE
'use strict';

var ReasonReact = require("reason-react/lib/js/src/ReasonReact.js");
var ReactNative = require("react-native");

function make(accessibilityLabel, color, disabled, onPress, testID, title) {
  var partial_arg = {
    accessibilityLabel: accessibilityLabel,
    color: color,
    disabled: disabled,
    onPress: onPress,
    testID: testID,
    title: title
  };
  var partial_arg$1 = ReactNative.Button;
  return (function (param) {
      return ReasonReact.wrapJsForReason(partial_arg$1, partial_arg, param);
    });
}

exports.make = make;
/* ReasonReact Not a pure module */
