/**
 * Created by wanghongxiang on 2018/11/20.
 */
const {
    HookMap,
    SyncHook,
    SyncBailHook,
    SyncWaterfallHook,
    SyncLoopHook,
    AsyncParallelHook,
    AsyncParallelBailHook,
    AsyncSeriesHook,
    AsyncSeriesBailHook,
    AsyncSeriesWaterfallHook
} = require("tapable");

const hook = new SyncHook(["arg1", "arg2", "arg3", "arg4"]);
hook.tap('arg1', (a,b,c,d) => {
    console.log(a,b,c,d)
})
hook.tap('arg4', (res) => {
    console.log(res)
})
hook.tap('arg3', res => {
    console.log(res)
})
hook.call('test1','test2','test3','test4')

