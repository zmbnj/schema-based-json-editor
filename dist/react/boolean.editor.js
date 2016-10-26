"use strict";
var React = require("react");
var common = require("../common");
var title_editor_1 = require("./title.editor");
var BooleanEditor = (function (_super) {
    __extends(BooleanEditor, _super);
    function BooleanEditor(props) {
        var _this = this;
        _super.call(this, props);
        this.onChange = function (e) {
            _this.value = e.target.checked;
            _this.props.updateValue(_this.value);
        };
        this.toggleOptional = function () {
            if (_this.value === undefined) {
                _this.value = common.getDefaultValue(_this.props.schema, _this.props.initialValue === undefined);
            }
            else {
                _this.value = undefined;
            }
            _this.setState({ value: _this.value });
            _this.props.updateValue(_this.value);
        };
        if (this.props.required) {
            this.value = common.getDefaultValue(this.props.schema, this.props.initialValue);
        }
        else {
            this.value = undefined;
        }
    }
    BooleanEditor.prototype.componentDidMount = function () {
        if (this.value !== this.props.initialValue) {
            this.props.updateValue(this.value);
        }
    };
    BooleanEditor.prototype.render = function () {
        var control = null;
        if (this.value !== undefined) {
            control = (React.createElement("div", {className: this.props.theme.optionalCheckbox}, 
                React.createElement("label", null, 
                    React.createElement("input", {type: "checkbox", onChange: this.onChange, checked: this.value, readOnly: this.props.readonly || this.props.schema.readonly}), 
                    this.props.title)
            ));
        }
        var optionalCheckbox = null;
        if (!this.props.required) {
            optionalCheckbox = (React.createElement("div", {className: this.props.theme.optionalCheckbox}, 
                React.createElement("label", null, 
                    React.createElement("input", {type: "checkbox", onChange: this.toggleOptional, checked: this.value === undefined}), 
                    "is undefined")
            ));
        }
        return (React.createElement("div", {className: this.props.theme.row}, 
            React.createElement(title_editor_1.TitleEditor, __assign({}, this.props)), 
            optionalCheckbox, 
            control, 
            React.createElement("p", {className: this.props.theme.help}, this.props.schema.description)));
    };
    return BooleanEditor;
}(React.Component));
exports.BooleanEditor = BooleanEditor;
//# sourceMappingURL=boolean.editor.js.map