var Action = /** @class */ (function () {
    function Action(name, startTimeHour, startTimeMinute) {
        this.name = name;
        var now = new Date();
        this.startTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), startTimeHour, startTimeMinute);
    }
    return Action;
}());
var ActionList = /** @class */ (function () {
    function ActionList() {
        this.actions = [];
    }
    ActionList.prototype.pushAction = function (action) {
        this.actions.push(action);
    };
    ActionList.prototype.getCurrentAction = function (now) {
        for (var i = 0; i + 1 < this.actions.length && this.actions[i + 1].startTime <= now; i++) {
        }
        return this.actions[i];
    };
    ActionList.prototype.getNextAction = function (now) {
        for (var i = 0; i + 1 < this.actions.length && this.actions[i + 1].startTime <= now; i++) {
        }
        return this.actions[i + 1];
    };
    ActionList.prototype.getLength = function () {
        return this.actions.length;
    };
    return ActionList;
}());
// デフォルト値を設定
function getSampleActions() {
    var resultList = new ActionList();
    resultList.pushAction(new Action('起床', 4, 0));
    resultList.pushAction(new Action('瞑想', 4, 30));
    resultList.pushAction(new Action('朝食・休憩', 6, 30));
    resultList.pushAction(new Action('瞑想', 8, 0));
    resultList.pushAction(new Action('瞑想', 9, 0));
    resultList.pushAction(new Action('昼食', 11, 0));
    resultList.pushAction(new Action('休憩', 12, 0));
    resultList.pushAction(new Action('瞑想', 13, 0));
    resultList.pushAction(new Action('瞑想', 14, 30));
    resultList.pushAction(new Action('瞑想', 15, 30));
    resultList.pushAction(new Action('ティータイム', 17, 0));
    resultList.pushAction(new Action('瞑想', 18, 0));
    resultList.pushAction(new Action('講話', 19, 0));
    resultList.pushAction(new Action('質問', 21, 0));
    resultList.pushAction(new Action('就寝', 21, 30));
    return resultList;
}
