package com.pang;

public abstract class UIControl {
    // 封装控件状态，默认启用
    private boolean isEnabled = true;

    public abstract void render();

    // 启用控件
    public void enable() {
        isEnabled = true;
    }

    // 禁用控件
    public void disable() {
        isEnabled = false;
    }

    // 返回控件状态
    public boolean isEnabled() {
        return isEnabled;
    }
}
