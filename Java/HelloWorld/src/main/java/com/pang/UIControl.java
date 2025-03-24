package com.pang;

public class UIControl {
    // 封装控件状态，默认启用
    private boolean isEnabled = true;

    public UIControl() {
        System.out.println("UIControl with no parameters");
    }

    public UIControl(boolean isEnabled) {
        this.isEnabled = isEnabled;
        System.out.println("UIControl with parameter");
    }

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
